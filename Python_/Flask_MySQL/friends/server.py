from flask import Flask, request, redirect, render_template, session, flash
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'friendsdb')

@app.route('/')
def index():

	friends = mysql.query_db('SELECT * FROM friends')

	return render_template('index.html', all_friends=friends)

@app.route('/friends', methods=['POST'])
def create():

	query = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (:first_name, :last_name, :occupation, NOW(), NOW())"
	
	data = {
             'first_name': request.form['first_name'], 
             'last_name':  request.form['last_name'],
             'occupation': request.form['occupation']
           }

	mysql.query_db(query, data)

	return redirect('/')


@app.route('/friends/<id>/edit')
def edit(id):

	ids = "SELECT * FROM friends WHERE id = '{}'".format(id)

	friends = mysql.query_db(ids)


	return render_template('edit.html', something= friends)

@app.route('/friends/<id>', methods=['POST'])
def update(id):

	update = "UPDATE friends SET first_name = '{}', last_name = '{}', occupation = '{}', updated_at = NOW() WHERE id = {}".format(request.form['first_name'], request.form['last_name'], request.form['occupation'], int(id))
	
	mysql.query_db(update)

	return redirect('/')
	

@app.route('/friends/<id>/delete', methods=['POST'])
def destroy(id):

	delete = "DELETE FROM friends WHERE id = '{}'".format(id)

	mysql.query_db(delete)

	return redirect('/')

app.run(debug=True)

#DELETE FROM `friendsdb`.`friends` WHERE `id`='7';