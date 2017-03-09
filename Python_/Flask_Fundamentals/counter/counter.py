from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

#count += 1 on refresh
#count += 2 on button
#count reset on reset button 

@app.route('/')

def index():

   if "counter" in session:
      session['counter'] += 1
   else:
      session['counter'] = 1
   return render_template('counter.html')


@app.route('/count', methods=['POST'])

def count():

   session['counter'] += 1

   return redirect('/')

@app.route('/reset', methods=['POST'])

def reset():

   session.clear()

   return redirect('/')

app.run(debug=True)