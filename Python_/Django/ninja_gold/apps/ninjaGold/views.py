from django.shortcuts import render, redirect
import random 
import datetime

def index(request):
	if 'sents' in request.session:
		pass
	else:
		request.session['sents'] = []

	if 'gold' in request.session:
		pass
	else:
		request.session['gold'] = 0

	return render(request, "ninjaGold/index.html")

def gold(request):

	if request.method == "POST":
		if request.POST['build'] == 'farm':
			request.session['randomFarm'] = random.randrange(10, 21)
			farmsent = "Earned "+ str(request.session['randomFarm'])+  " golds from the farm!"+ " " +str(datetime.datetime.now().strftime('%Y/%m/%d %H:%M'))
			request.session['sents'].append(farmsent)
			request.session['gold'] += request.session['randomFarm']

		elif request.POST['build'] == 'cave':
			request.session['randomCave'] = random.randrange(5, 11)
			cavesent = "Earned "+ str(request.session['randomCave'])+  " golds from the cave!" + " " +str(datetime.datetime.now().strftime('%Y/%m/%d %H:%M'))
			request.session['sents'].append(cavesent)
			request.session['gold'] += request.session['randomCave']

		elif request.POST['build'] == 'house':
			request.session['randomHouse'] = random.randrange(2, 6)
			housesent = "Earned "+ str(request.session['randomHouse'])+  " golds from the house!"+ " " +str(datetime.datetime.now().strftime('%Y/%m/%d %H:%M'))
			request.session['sents'].append(housesent)
			request.session['gold'] += request.session['randomHouse']

		elif request.POST['build'] == 'casino':
			randomNum = random.randrange(0, 2)
			if randomNum == 1:
				request.session['randomCasino'] = random.randrange(1, 51)
				casinosent = "Earned "+ str(request.session['randomCasino'])+  " golds from the casino!"+ " " +str(datetime.datetime.now().strftime('%Y/%m/%d %H:%M'))
				request.session['sents'].append(casinosent)
				request.session['gold'] += request.session['randomCasino']

			elif randomNum == 0:
				request.session['randomCasino'] = random.randrange(1, 51)
				casinosent = "Lost "+ str(request.session['randomCasino'])+  " golds from the casino!"+ " " +str(datetime.datetime.now().strftime('%Y/%m/%d %H:%M'))
				request.session['sents'].append(casinosent)
				request.session['gold'] -= request.session['randomCasino']
		return redirect('/')

	else:
		return redirect('/')
