import pathlib
import discord
import os
import textwrap
from IPython.display import display, Markdown
import google.generativeai as genai

# Configure Gemini API key
GEMINI_API_KEY = os.getenv('GEMINI_API_KEY')
genai.configure(api_key=GEMINI_API_KEY)


# Function to format text as Markdown
def to_markdown(text):
    text = text.replace('•', '  *')
    return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

# Discord bot setup
class MyClient(discord.Client):
    async def on_ready(self):
        print(f'Logged on as {self.user}!')
    async def on_message(self, message):
        print(f'Message from {message.author}: {message.content}')
      
        if self.user != message.author:
          if self.user in message.mentions:
            if message.content.lower() in ["what is your name?","name","kifflom","who are you?","who are you","who are you?","who are you","who are you?","what are you?","what are you","what are you?","what are you","what are you?","what are you","what are you?","what are you","what are you?","what are you","what are you?","Identify yourself","identify yourself"]:
              await message.channel.send("I am a discord bot Gemini, powered by Google. I am here to help you with your queries. How can I assist you today?")
            else:
              channel = message.channel
              model = genai.GenerativeModel('gemini-pro')
              # Generate response using Gemini model
              response = model.generate_content(message.content)
              await channel.send(response.text[:1999])
# Discord bot token
token = os.getenv('SECRET_KEY')

# Initialize Discord bot and run
intents = discord.Intents.default()
intents.message_content = True
client = MyClient(intents=intents)
client.run(token)