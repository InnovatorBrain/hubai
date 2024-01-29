# views.py

# LOGIN FUNCTIONALITY HERE --------------------------

from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.contrib import messages

def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            # Redirect to a success page.
            return redirect('/')
        else:
            # Return an 'invalid login' error message.
            messages.error(request, 'Username or Password not correct')
            return redirect('/login.js')

    return render(request, 'login.html')
