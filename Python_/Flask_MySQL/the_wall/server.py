from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
from flask.ext.bcrypt import Bcrypt 
import re
app = Flask(__name__)
bcrypt = Bcrypt(app)
mysql = MySQLConnector(app,'emailvalid')
app.secret_key = 'Dorian'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/register', methods=['POST'])
def register():
	#Complete registration forms with validation and submit info to mysql:
	if len(request.form['first_name']) < 2:
		flash("First name cannot be less than 2 characters long!")
		return redirect('/')
	if len(request.form['last_name']) < 2:
		flash("Last name cannot be less than 2 characters long!")
		return redirect('/')
	if request.form['first_name'].isalpha() == False or request.form['last_name'].isalpha() == False:
		flash("First/Last name(s) must not contain any numbers!")
		return redirect('/')
	if not EMAIL_REGEX.match(request.form['email']):
		flash('EMAIL IS NOT VALID!')
		return redirect('/')
	if len(request.form['password']) < 1:
		flash("Password cannot be empty!")
		return redirect('/')
	if len(request.form['password']) < 8:
		flash("Password should be at least 8 Characters")
		return redirect('/')
	if len(request.form['passconfirm']) < 1:
		flash("Confirm Password cannot be empty!")
		return redirect('/')
	if request.form['password'] != request.form['passconfirm']:
		flash("Password and Password Confirm Should Match!")
		return redirect('/')
	else: 
		fname = request.form['first_name']
		lname = request.form['last_name']
		email = request.form['email']
		password = request.form['password']
		passconfirm = request.form['passconfirm']
		pw_hash = bcrypt.generate_password_hash(password)
		insert_query = "INSERT INTO users (first_name, last_name, email, pw_hash, created_at, updated_at) VALUES (:first_name, :last_name, :email, :pw_hash, NOW(), NOW())"
		query_data = { 'first_name': fname, 'last_name': lname, 'email': email, 'pw_hash': pw_hash }
		mysql.query_db(insert_query, query_data)
		flash("Thank you for registering!")
		return redirect('/')

@app.route('/login', methods=['POST'])
def login():

	#Confirming login succesful and render wall page with flash welcome:
	email = request.form['email']
	password = request.form['password']
	user_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
	query_data = { 'email': email }
	session['user'] = mysql.query_db(user_query, query_data)
	if bcrypt.check_password_hash(session['user'][0]['pw_hash'], password):
		flash("Welcome " + str(session['user'][0]['first_name']) + " " + str(session['user'][0]['last_name']))
		print session['user'][0]['id']
		return redirect('/wall')
	else:
		flash('Invalid Credentials')
		return redirect('/')

@app.route('/message', methods=['POST'])
def message():
	
	#Taking the message from the form on wall.html and submitting it to mysql:
	message = request.form['message']
	insert_query = "INSERT INTO messages (message, created_at, updated_at, user_id) VALUES (:message, NOW(), NOW(), :user_id)"
	query_data = { 'message': message, 'user_id': session['user'][0]['id'] }
	mysql.query_db(insert_query, query_data)
	return redirect('/wall')

@app.route('/wall')
def wall():
	#Rendering wall.html with messages info from mysql
	select = "SELECT users.first_name, users.last_name, messages.message, messages.created_at, messages.id FROM users JOIN messages ON users.id = messages.user_id ORDER BY messages.id DESC"
	messages = mysql.query_db(select)
	#Rending wall.html with comments info from mysql
	comments ="SELECT users.first_name, users.last_name, comments.comments, comments.created_at, comments.message_id, comments.user_id FROM users JOIN comments ON users.id = comments.user_id ORDER BY comments.id ASC"
	comms = mysql.query_db(comments)
	return render_template('wall.html', messages=messages, comms=comms)

@app.route('/comments/<id>', methods=['POST'])
def comments(id):
	print session['user'][0]['id']
	#Taking the comments from the from on wall.html and submitting it to mysql:
	comments = request.form['comments']
	insert_query = "INSERT INTO comments (comments, created_at, updated_at, user_id, message_id) VALUES (:comments, NOW(), NOW(), :user_id, :message_id)"
	query_data = { 'comments': comments, 'user_id': session['user'][0]['id'], 'message_id': id }
	mysql.query_db(insert_query, query_data)
	return redirect('/wall')

@app.route('/logoff')
def logoff():
	#Clear session ad log off user
	session.clear()
	return redirect('/')

app.run(debug=True)