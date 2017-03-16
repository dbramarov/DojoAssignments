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
def create():
	
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

		insert_query = "INSERT INTO users (first_name, last_name, email, pw_hash, created_at) VALUES (:first_name, :last_name, :email, :pw_hash, NOW())"
		query_data = { 'first_name': fname, 'last_name': lname, 'email': email, 'pw_hash': pw_hash }

		mysql.query_db(insert_query, query_data)
		flash("Thank you for registering!")
		return render_template('success.html')

@app.route('/login', methods=['POST'])
def login():

	email = request.form['email']
	password = request.form['password']
	user_query = "SELECT * FROM users WHERE email = :email LIMIT 1"
	query_data = { 'email': email }
	user = mysql.query_db(user_query, query_data)
	if bcrypt.check_password_hash(user[0]['pw_hash'], password):
		flash("Welcome! " + str(user[0]['first_name']) + " " + str(user[0]['last_name']))
		return render_template('success.html')
	else:
		flash('Invalid Credentials')
		return redirect('/')


app.run(debug=True)