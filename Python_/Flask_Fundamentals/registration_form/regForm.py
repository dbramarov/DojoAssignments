from flask import Flask, render_template, request, redirect, flash
import re
app = Flask(__name__)
app.secret_key = 'Dorian'
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
  return render_template("regForm.html")

@app.route('/inf', methods=['POST'])
def createuser():

   if len(request.form['email']) < 1:
      flash("Email cannot be empty!")
      return redirect('/')

   elif not EMAIL_REGEX.match(request.form['email']):
      flash('Invalid Email Address!')
      return redirect('/')

   if len(request.form['fname']) < 1:
      flash("First name cannot be empty!")
      return redirect('/')

   if request.form['fname'].isalpha() == False or request.form['lname'].isalpha() == False:
      flash("First/Last name(s) must not contain any numbers.")
      return redirect('/')

   if len(request.form['lname']) < 1:
      flash("Last name cannot be empty!")
      return redirect('/')

   if len(request.form['pass']) < 1:
      flash("Password cannot be empty!")
      return redirect('/')

   if len(request.form['pass']) < 9:
      flash("Password should be more than 8 Characters")
      return redirect('/')

   if len(request.form['conpass']) < 1:
      flash("Confirm Password cannot be empty!")
      return redirect('/')

   if request.form['pass'] != request.form['conpass']:
      flash("Password and Password Confirm Should Match!")
      return redirect('/')

   else:   
      flash("Thanks for submitting your information.")
      return redirect('/')

app.run(debug=True)