from django.shortcuts import render

# PENDING
# Create your views here.
import pathlib
import textwrap

# import googlfrom google import generativeai
from google import generativeai as genai

from django.http import HttpResponse
from IPython.display import display
from IPython.display import Markdown

# Create your models here.
"""TEXT-TO-TEXT
   IMAGE-TO-TEXT"""


def geminichat(request):
    def to_markdown(text):
        text = text.replace("•", "  *")
        return Markdown(textwrap.indent(text, "> ", predicate=lambda _: True))

    # PART - 2
    GOOGLE_API_KEY = "AIzaSyDR1IWLJSdYnsSmP-zU5hbCfGUy6JqhhtE"
    genai.configure(api_key=GOOGLE_API_KEY)

    # PART - 3
    def run_conversation(initial_message, num_turns=3):
        model = genai.GenerativeModel("gemini-pro")
        chat = model.start_chat(history=[])

        for _ in range(num_turns):
            user_input = input("User: ")
            chat_response = chat.send_message(user_input)
            # The RESPONSE IN Here
            return (f"Model: {chat_response.parts[0].text}\n")

    if __name__ == "__main__":
        initial_message = ""
        num_turns = 1000  # You can adjust the number of turns in the conversation
        run_conversation(initial_message, num_turns)
