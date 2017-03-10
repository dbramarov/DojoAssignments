from flask import Flask, render_template, request, redirect
app = Flask(__name__)
app.secret_key = 'Dorian'


@app.route('/')
def index():

  return render_template("disninja.html")

@app.route('/ninja')
def ninja():

   displayAll = True

   return render_template("disninjatwo.html", displayAll=displayAll)

@app.route('/ninja/<color>')
def getColor(color):

    displayAll = False

    return render_template('disninjatwo.html', displayAll=displayAll, color=color)

app.run(debug=True)