from django.shortcuts import render


def home(request):
    return render(request, 'showcase/showcase.html')

def calculator(request):
    return render(request, 'showcase/calculator.html')

def galery(request):
    return render(request, 'showcase/galery.html')

def item(request):
    return render(request, 'showcase/item.html')
