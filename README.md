# Attendance Chatbox With AI
Generate tailored, Attendance Chatbox with AI-aware Face Recognition,Bio metrics and portfolio ZIPs from office profile JSON. Built with Gradio and open models.

#An AI-powered Attendance System with:

Face Recognition for quick identification

Biometrics support (fingerprint, retina, etc.)

Portfolio ZIP handling from office profile JSON

Chat interface for employees to check attendance and submit requests

Built with Gradio and open-source AI models

#Features :
Employee Recognition: Identify employees through face recognition.

Biometric Integration: Capture fingerprint or other biometric data.

Portfolio Management: Upload and track office portfolio ZIP files linked to employee profiles.

Interactive Chatbox: Query attendance, leave status, and submission confirmations.

JSON Profile Parsing: Pull employee data from office_profiles.json.


##Requirements
pip install -r requirements.txt


#Typical requirements in requirements.txt:
gradio
opencv-python
face_recognition
numpy
pandas
Pillow
tensorflow  # or torch if using PyTorch models

#File Structure:
attendance_chatbox/
│
├─ app.py                  # Main Gradio app
├─ office_profiles.json    # Employee data and portfolio references
├─ requirements.txt        # Dependencies
├─ models/                 # Pretrained face recognition / AI models
├─ portfolios/             # Employee portfolio ZIP files
└─ utils/
   ├─ face_recog.py        # Face recognition functions
   ├─ biometrics.py        # Biometric reading / processing
   └─ portfolio_handler.py # ZIP processing
   
# Install dependencies
pip install -r requirements.txt

# Start Gradio app
python app.py
