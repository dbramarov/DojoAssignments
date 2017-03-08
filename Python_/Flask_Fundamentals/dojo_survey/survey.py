from flask import Flask, render_template, request, redirect
app = Flask(__name__)

@app.route('/')

def index():
  return render_template("survey.html")

@app.route('/inf', methods=['POST'])

def create_user():

   print "Got Post Info"
  
   name = request.form['name']
   location = request.form['xyz']
   favlang = request.form['favlang']
   comments = request.form['comm']

   print name
   print location
   print favlang
   print comments

   return render_template('info.html', name = name, location = location, favlang = favlang, comments = comments)

app.run(debug=True)