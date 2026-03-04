import os
from agno.agent import Agent
from agno.models.openai import OpenAIChat
from elevenlabs import ElevenLabs
from textwrap import dedent
from uuid import uuid4

# NOTE: If you prefer Gemini, uncomment the import below and change the model in __init__
# from agno.models.google import Gemini 

class GhibliAutomation:
    def __init__(self, openai_api_key=None, elevenlabs_key=None):
        self.openai_api_key = openai_api_key or os.getenv("OPENAI_API_KEY")
        self.eleven_key = elevenlabs_key or os.getenv("ELEVENLABS_API_KEY")
        
        # 1. Script & Visual Cue Agent (The "Director")
        # We use OpenAI by default here because of specific dependency issues with Gemini on Python 3.9
        self.director = Agent(
            name="GhibliDirector",
            model=OpenAIChat(id="gpt-4o", api_key=self.openai_api_key),
            description=dedent("""
                You are a Senior Animation Director specialized in Studio Ghibli style.
                Your task is to convert a topic into a high-retention script with [GHIBLI VISUAL] cues.
                Strictly follow the 'Visual DNA':
                - Style: Watercolor, hand-painted, soft brushstrokes.
                - Character: Elara (12yo girl, red ribbon, indigo sweater).
                - Concept: 'Ma' (quiet moments of everyday tasks).
            """),
            instructions=[
                "Write a 3-minute script with a Hook, Setup, and 3-Act structure.",
                "Insert [GHIBLI VISUAL: description] every 20 words.",
                "Describe a foreground, midground, and background for depth.",
                "Ensure nature reactions (wind swaying, clouds moving) are included.",
                "Include ambient sound cues like [SOUND EFFECT: wind chimes]."
            ],
            markdown=True
        )

    def generate_video_package(self, topic):
        print(f"🎬 Starting production for: {topic}")
        
        # Step A: Generate Script & Visual Breakdown
        print("✍️ Generating script and visual cues...")
        response = self.director.run(f"Create a production package for: {topic}")
        content = response.content
        
        # Step B: Voice Synthesis (ElevenLabs)
        if self.eleven_key:
            print("🎙️ Synthesizing voiceover (Soft Storyteller, Stability 40%)...")
            client = ElevenLabs(api_key=self.eleven_key)
            audio_generator = client.text_to_speech.convert(
                text=content, 
                voice_id="JBFqnCBsd6RMkjVDRZzb", 
                model_id="eleven_multilingual_v2"
            )
            
            # Save audio
            filename = f"production_{uuid4().hex[:8]}.mp3"
            with open(filename, "wb") as f:
                for chunk in audio_generator:
                    if chunk: f.write(chunk)
            print(f"✅ Voiceover saved to: {filename}")
        
        # Step C: Visual Prompt Sheet
        print("🖼️ Production package complete. Copy visual cues to Runway Gen-3/SeaArt.")
        return content

if __name__ == "__main__":
    # Test the logic (Dry Run)
    auto = GhibliAutomation(openai_api_key="MOCK_KEY", elevenlabs_key=None)
    print("--- STARTING TEST RUN ---")
    try:
        print("Model ID:", auto.director.model.id)
        print("Agent Name:", auto.director.name)
        print("✅ Automation Logic Initialized Successfully.")
    except Exception as e:
        print(f"❌ Initialization failed: {e}")
