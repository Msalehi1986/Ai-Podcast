(function() {
    window._POSTHOG_REMOTE_CONFIG = window._POSTHOG_REMOTE_CONFIG || {};
    window._POSTHOG_REMOTE_CONFIG['phc_KQDh5IkRcTsPOoUtwmVxoATdOqNYCo0vTdwE77aNOQv'] = {
        config: {
            "token": "phc_KQDh5IkRcTsPOoUtwmVxoATdOqNYCo0vTdwE77aNOQv",
            "supportedCompression": ["gzip", "gzip-js"],
            "hasFeatureFlags": true,
            "captureDeadClicks": false,
            "capturePerformance": {
                "network_timing": true,
                "web_vitals": true,
                "web_vitals_allowed_metrics": null
            },
            "autocapture_opt_out": true,
            "autocaptureExceptions": false,
            "analytics": {
                "endpoint": "/i/v0/e/"
            },
            "elementsChainAsString": true,
            "sessionRecording": {
                "endpoint": "/s/",
                "consoleLogRecordingEnabled": true,
                "recorderVersion": "v2",
                "sampleRate": null,
                "minimumDurationMilliseconds": 10000,
                "linkedFlag": "enable-session-recording",
                "networkPayloadCapture": null,
                "masking": null,
                "urlTriggers": [],
                "urlBlocklist": [],
                "eventTriggers": [],
                "triggerMatchType": null,
                "scriptConfig": null
            },
            "heatmaps": true,
            "surveys": [{
                "id": "0190eab3-fab6-0000-757f-29fc69834440",
                "name": "Norwegian Language Feedback",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-e91ae430ed",
                "internal_targeting_flag_key": "survey-targeting-69ff293118-custom",
                "questions": [{
                    "id": "b945a90b-c63f-48f3-84a2-0d1bc841b780",
                    "type": "open",
                    "question": "What do you think of our new Norwegian Language?",
                    "description": "",
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "text"
                }],
                "conditions": {
                    "url": "/app/speech-synthesis",
                    "urlMatchType": "icontains"
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": false,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-07-25T16:23:36.783000Z",
                "end_date": null,
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018f156b-1bb6-0000-8e36-804db7c40b91",
                "name": "Retargeting Growth Referral",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-retargeting-growth-referral",
                "questions": [{
                    "id": "282d0181-290b-48bc-80b3-1ab8981707b6",
                    "link": "https://calendly.com/aditi-sri/quick-chat-with-elevenlabs?back=1&month=2024-04",
                    "type": "link",
                    "question": "Hello! We've noticed your impressive usage of ElevenLabs!",
                    "buttonText": "Schedule",
                    "description": "Did you know our Enterprise Plan could be a great fit for you? It's more cost-effective and performant for high-volume users and offers enhanced security features. Schedule a short call with us to learn more. Talk to you soon!"
                }],
                "conditions": {
                    "url": "",
                    "seenSurveyWaitPeriodInDays": 3
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-04-25T13:21:55.321000Z",
                "end_date": "2024-05-03T11:08:25.666000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018f579b-8f54-0000-fc80-2750ec438bfb",
                "name": "Pricing survey",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-67bbe85fd9",
                "questions": [{
                    "id": "617b9f9d-a3fb-42b6-a2d0-5a98805bf69c",
                    "link": "https://elevenlabs.io/app/redirect-external/survey-RSM5LGV",
                    "type": "link",
                    "question": "Help us improve ElevenLabs",
                    "buttonText": "Start survey",
                    "description": "Complete this 15-minute survey to help improve ElevenLabs and be entered into a raffle for a $250 gift card"
                }],
                "conditions": {
                    "url": "elevenlabs.io/app/",
                    "seenSurveyWaitPeriodInDays": 10
                },
                "appearance": {
                    "position": "center",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-05-08T09:49:40.950000Z",
                "end_date": "2024-05-20T13:30:56.125000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018faa88-3408-0000-16e9-23af9e2692f1",
                "name": "Voiceover Studio User Feedback",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-bcb6df9692",
                "internal_targeting_flag_key": "survey-targeting-7700df13f6-custom",
                "questions": [{
                    "id": "0f38bd74-3f40-4291-a474-7b5d6ca734e4",
                    "link": "https://calendly.com/alex-gofk/product-feedback-interview",
                    "type": "link",
                    "question": "Would you be interested in participating in a customer interview?",
                    "buttonText": "Schedule",
                    "description": "We are looking for feedback on Voiceover Studio and would love to hear from you!<br><br> Not only will you be able to influence the direction of the product but we will also reward you with free characters after the call as a show of thanks!"
                }],
                "conditions": {
                    "url": ""
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-05-24T12:31:05.324000Z",
                "end_date": "2024-05-30T18:50:35.525000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "01907e83-b2b0-0000-005b-b9ca30901cae",
                "name": "[Voiceover Studio] User interview",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-98dde9a7bd",
                "internal_targeting_flag_key": "survey-targeting-b8f176c837-custom",
                "questions": [{
                    "id": "4162c8a0-240d-4cd8-9516-5c9dce3cf09a",
                    "link": "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0ml4vP_hyjSv-yhG3EWwfUlprhKExwHBtKCuVQ8l0PjSBnpNxpm12d3QS94USkd9aPBXj6UxTe?gv=true",
                    "type": "link",
                    "question": "Would you be interested in participating in a customer interview?",
                    "branching": {
                        "type": "end"
                    },
                    "buttonText": "Schedule",
                    "description": "Not only will you be able to influence the direction of the product but we will also reward you with free characters after the call as a show of thanks!",
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "html"
                }],
                "conditions": {
                    "url": ""
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": false,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Looking forward to chatting with you!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-07-05T07:38:01.760000Z",
                "end_date": "2024-07-25T22:58:47.211000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "0190edfd-7def-0000-b27d-9cb27ebb5fda",
                "name": "Hungarian Language feedback",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-12f3858025",
                "internal_targeting_flag_key": "survey-targeting-27c7b387e8-custom",
                "questions": [{
                    "id": "c1f101db-b693-4336-b93a-0d968987c0f0",
                    "type": "open",
                    "question": "What do you think of our new Hungarian Language?",
                    "description": "",
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "text"
                }],
                "conditions": {
                    "url": "elevenlabs.io/app/speech-synethesis"
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": false,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-07-26T07:42:20.646000Z",
                "end_date": null,
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "0190ee01-fe0f-0000-4485-93958b954d4e",
                "name": "Vietnamese Language feedback",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-fcd88b3410",
                "internal_targeting_flag_key": "survey-targeting-8e44cdbd1f-custom",
                "questions": [{
                    "id": "561a2211-a0f8-43c0-a46a-9f7f9f65fc10",
                    "type": "open",
                    "question": "What do you think of our new Vietnamese language?",
                    "description": "",
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "text"
                }],
                "conditions": {
                    "url": "elevenlabs.io/app/speech-synethesis"
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": false,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-07-26T07:47:13.965000Z",
                "end_date": null,
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018fc104-5257-0000-1875-d162d4fe7ec3",
                "name": "voiceover studio PMF",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-0d93746a34",
                "internal_targeting_flag_key": "survey-targeting-baa6ec3162-custom",
                "questions": [{
                    "id": "0f6b83f1-e1e0-485d-88eb-04511220dc2b",
                    "type": "single_choice",
                    "choices": ["Yes", "No"],
                    "question": "Would you like to give quick feedback on Voiceover studio?",
                    "buttonText": "Next",
                    "description": ""
                }, {
                    "id": "8f51850c-d079-49c1-be92-01b3aba12754",
                    "type": "multiple_choice",
                    "choices": ["Very disappointed", "Somewhat disappointed", "Not disappointed"],
                    "question": "1/4 How disappointed would you be if you could no longer use the voice over studio?",
                    "buttonText": "Next",
                    "description": ""
                }, {
                    "id": "3eeefbc8-42ce-4bc2-9d6a-73dfa1a18545",
                    "type": "open",
                    "question": "2/4 What types of videos are you making with Voiceover studio?",
                    "buttonText": "Next",
                    "description": ""
                }, {
                    "id": "ebe46b84-a1bf-4bc5-ae04-ca3d301fd116",
                    "type": "open",
                    "question": "3/4 What is the main benefit you receive from Voiceover studio?",
                    "buttonText": "Submit",
                    "description": ""
                }, {
                    "id": "523c56c6-6d31-43c4-9fe8-6cdc7661f433",
                    "type": "open",
                    "question": "4/4 How could we improve Voiceover studio for you?",
                    "buttonText": "Submit",
                    "description": ""
                }],
                "conditions": {
                    "url": "/app/"
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-05-28T21:10:42.206000Z",
                "end_date": null,
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "01949de5-0fd7-0000-28f9-bc820084ba22",
                "name": "[/docs/api-reference] developer feedback",
                "type": "popover",
                "internal_targeting_flag_key": "survey-targeting-65fc72deef-custom",
                "questions": [{
                    "id": "842a0bd9-3269-483c-8474-e89d1d27bb1d",
                    "type": "open",
                    "question": "Developer feedback",
                    "description": "<strong>Shape our roadmap:</strong> Share your thoughts on how we can enhance our APIs, SDKs, or developer tools this year. ",
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "html"
                }],
                "conditions": {
                    "url": "/docs/api-reference/introduction"
                },
                "appearance": {
                    "position": "left",
                    "fontFamily": "system-ui",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "autoDisappear": true,
                    "backgroundColor": "#ffffff",
                    "shuffleQuestions": false,
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "submitButtonTextColor": "white",
                    "thankYouMessageHeader": "Feedback submitted",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black",
                    "thankYouMessageDescription": "",
                    "thankYouMessageDescriptionContentType": null
                },
                "start_date": "2025-01-25T14:38:03.669000Z",
                "end_date": "2025-02-10T11:58:21.284000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018bd338-b73d-0000-a98b-c7f4dc2a5515",
                "name": "User interview [Luke]",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-user-interview",
                "questions": [{
                    "id": "adada799-97dc-40cb-862e-5b20f7b7333d",
                    "link": "https://calendly.com/luke-harries-elevenlabs/customer-interviews",
                    "type": "link",
                    "question": "Help us improve ElevenLabs through a short call",
                    "buttonText": "Schedule call",
                    "description": "We want to ask a few questions to better understand how to improve ElevenLabs for you"
                }],
                "conditions": {
                    "url": "https://elevenlabs.io/",
                    "urlMatchType": "exact"
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for booking!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2023-11-15T13:45:30.857000Z",
                "end_date": "2023-11-15T16:16:27.484000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018bf275-f85a-0000-67db-962e2350a17f",
                "name": "Customer segmentation survey [Luke]",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-customer-segmentation-survey-luke",
                "questions": [{
                    "id": "f5183603-1dab-468d-993e-765a89069c2b",
                    "link": "https://elevenlabs.io/redirect-external/typeform-UipGwwyA",
                    "type": "link",
                    "question": "Short survey to improve ElevenLabs",
                    "buttonText": "Start",
                    "description": "Takes less than 5 minutes to complete and we enter you into a $100 Amazon voucher raffle"
                }],
                "conditions": {
                    "url": "https://elevenlabs.io/",
                    "urlMatchType": "exact",
                    "seenSurveyWaitPeriodInDays": 30
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2023-11-21T19:02:11.950000Z",
                "end_date": "2023-11-23T16:40:00.527000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018c8996-91de-0000-894f-dbc91e822159",
                "name": "Dubbing Usage/Retention Survey",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-dubbing-usageretention-survey",
                "questions": [{
                    "id": "7ccb5387-55eb-42b2-adfa-3bc98448346d",
                    "link": "https://form.typeform.com/to/XMc5XrZF",
                    "type": "link",
                    "question": "Help us improve ElevenLabs! Chance to win a $100 Amazon gift card.",
                    "buttonText": "I'll Participate \u270b",
                    "description": "Your opinion matters to us. Complete this short 1 minute survey to be entered into a raffle to win a $100 Amazon gift card."
                }],
                "conditions": {
                    "url": ""
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "autoDisappear": false,
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "blue",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2023-12-21T20:56:33.297000Z",
                "end_date": "2023-12-29T01:52:59.342000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018c896b-1913-0000-9edc-3ab2c7a1bae4",
                "name": "Dubbing Awareness Survey",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-dubbing-awareness-survey",
                "questions": [{
                    "id": "0f3397ee-d7c9-4924-9dfb-781cd2cd5b30",
                    "link": "https://form.typeform.com/to/bUzARLhN",
                    "type": "link",
                    "question": "Help us improve ElevenLabs! Chance to win a $100 Amazon gift card.",
                    "buttonText": "I'll Participate \u270b",
                    "description": "Your opinion matters to us. Complete this short 1 minute survey to be entered into a raffle to win a $100 Amazon gift card."
                }],
                "conditions": {
                    "url": ""
                },
                "appearance": {
                    "position": "center",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "blue",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2023-12-21T20:54:47.408000Z",
                "end_date": "2023-12-24T22:58:55.587000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018d7b2e-e916-0000-d619-e25dd4651b73",
                "name": "Voices",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-voices",
                "questions": [{
                    "id": "fd786fbd-01c0-4f77-b13b-268d937e4362",
                    "type": "multiple_choice",
                    "choices": ["Yes", "No"],
                    "question": "Would you like celebrity or well-known voices on our platform?",
                    "buttonText": "Submit",
                    "description": ""
                }, {
                    "id": "3b957ca8-e920-4836-91bf-b72cd0defd65",
                    "type": "open",
                    "question": "Name three celebrity or well-known voices you would like to see available for your use?",
                    "buttonText": "Submit",
                    "description": ""
                }, {
                    "id": "cacc5295-9a04-4822-863e-2bf7b84f807b",
                    "type": "multiple_choice",
                    "choices": ["Audiobooks", "Voice Overs", "Listening to Articles", "Fun with Friends", "Other"],
                    "question": "How would you use a celebrity or well-know voice?",
                    "buttonText": "Submit",
                    "description": "",
                    "hasOpenChoice": true
                }, {
                    "id": "2fcd2e9d-ae25-4fee-a465-635145671e36",
                    "type": "multiple_choice",
                    "choices": ["Yes", "No"],
                    "question": "Would you wait 24 hours to get approval on the celebrity and recognizable recording you are trying to generate?",
                    "buttonText": "Submit",
                    "description": ""
                }],
                "conditions": {
                    "url": ""
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": false,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-02-05T22:18:17.834000Z",
                "end_date": "2024-02-06T14:54:03.057000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018dd0b0-f121-0000-788d-b74a52bd3bb1",
                "name": "User interview - Creator+, Signed up 2023",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-user-interview-creator-signed-up-2023",
                "questions": [{
                    "id": "c175300f-00fe-4875-85ae-c4c813c1c555",
                    "link": "https://calendly.com/sam-p3q/elevenlabs-customer-interview",
                    "type": "link",
                    "question": "Would you be interested in participating in a customer interview?",
                    "buttonText": "Schedule",
                    "description": "We are looking for feedback on our product and would love to hear from you!"
                }],
                "conditions": {
                    "url": "",
                    "seenSurveyWaitPeriodInDays": 14
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": false,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-02-22T12:01:32.261000Z",
                "end_date": "2024-02-23T07:13:03.656000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018d7c60-753b-0000-7862-c2d6c96bd622",
                "name": "Recognizable Voices",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-recognizable-voices",
                "questions": [{
                    "id": "66aa5eb4-a4b9-463a-95c1-60fdbf13ebb0",
                    "type": "multiple_choice",
                    "choices": ["Yes", "No"],
                    "question": "ElevenLabs is adding celebrity and recognizable voices in our voice library. Will you use them?",
                    "buttonText": "Submit",
                    "description": ""
                }, {
                    "id": "7d304c5c-ad05-4a71-93d4-15d4a9f1b004",
                    "type": "multiple_choice",
                    "choices": ["Audiobooks", "Listening to Articles", "Voice over", "Other"],
                    "question": "How would you use celebrity and recognizable voices in ElevenLabs' Voice Library?",
                    "buttonText": "Submit",
                    "description": "",
                    "hasOpenChoice": true
                }, {
                    "id": "fa4d9f00-e02b-4bf2-84de-220d2aecbe6e",
                    "type": "open",
                    "question": "List some celebrity and recognizable voices you want ElevenLabs to make available. We will take these into consideration.",
                    "buttonText": "Submit",
                    "description": ""
                }, {
                    "id": "57cea3f9-ba16-4f5f-9373-d1024693f026",
                    "type": "multiple_choice",
                    "choices": ["Yes", "No"],
                    "question": "Would you be willing to wait 24 hours to receive the recorded audio from the celebrity or recognizable voice?",
                    "buttonText": "Submit",
                    "description": ""
                }],
                "conditions": {
                    "url": "",
                    "seenSurveyWaitPeriodInDays": 15
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-02-06T03:05:37.453000Z",
                "end_date": "2024-02-06T14:54:07.062000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018d7b7a-0e88-0000-8be0-2d6dcc9cf8e5",
                "name": "YouTube Creator Survey",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-youtube-creator-survey",
                "questions": [{
                    "id": "a6a5d628-798f-451a-9821-8d007d00397b",
                    "type": "multiple_choice",
                    "choices": ["Voiceovers using Text to Speech", "Voiceovers using Speech to Speech", "Voice Cloning", "Dubbing"],
                    "optional": true,
                    "question": "Help us help you! In a few words, what do you use ElevenLabs for? ",
                    "buttonText": "Submit",
                    "description": ""
                }, {
                    "id": "4474399f-e9d2-4081-b462-219945ebdeed",
                    "type": "multiple_choice",
                    "choices": ["<1k", "1k - 10k", "10k - 100k", "100k - 1M", "1M+", "Not Applicable"],
                    "optional": true,
                    "question": "How many subscribers/followers/listeners/readers do you have?",
                    "buttonText": "Submit",
                    "description": ""
                }, {
                    "id": "09ba5921-53db-4865-a315-24085eba8ed6",
                    "type": "single_choice",
                    "choices": ["<$100 per month on average", "$100-1k per month on average", "$1k-10k per month on average", "$10k-100k per month on average", "$100k+ per month on average", "Not Applicable"],
                    "optional": true,
                    "question": "How much money do you make a month as a creator? ",
                    "buttonText": "Submit",
                    "description": ""
                }, {
                    "id": "7f54f47a-8c1c-44ec-bc0f-ec7f141194c2",
                    "type": "single_choice",
                    "choices": ["Yes", "No"],
                    "optional": true,
                    "question": "Would you be open to having a short call with us so we can learn more and improve the product?",
                    "buttonText": "Submit",
                    "description": ""
                }],
                "conditions": {
                    "url": ""
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "",
                    "placeholder": "Start typing...",
                    "autoDisappear": true,
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "#312B41",
                    "thankYouMessageHeader": "We appreciate your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-02-06T00:10:56.996000Z",
                "end_date": "2024-02-07T15:07:01.707000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018d7e0c-2eed-0000-d552-7778e077609a",
                "name": "User interview [Sam]",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-user-interview-sam",
                "questions": [{
                    "id": "b85c2d50-e528-444a-a12c-889730d32179",
                    "link": "https://calendly.com/sam-p3q/elevenlabs-customer-interview",
                    "type": "link",
                    "question": "Help us improve ElevenLabs through a short call",
                    "buttonText": "Schedule call",
                    "description": "We want to ask a few questions to better understand how to improve ElevenLabs for you"
                }],
                "conditions": {
                    "url": "",
                    "seenSurveyWaitPeriodInDays": 15
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thanks for booking!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black",
                    "thankYouMessageDescription": "We look forward to meeting you soon."
                },
                "start_date": "2024-02-06T11:06:48.590000Z",
                "end_date": "2024-02-06T14:52:10.981000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018e1422-a705-0000-7769-cc72272246a1",
                "name": "Cross Functional In Product Outreach to Growing Business Tier (API Toggled)",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-cross-functional-in-product-outreach-to-growing-business-tier",
                "questions": [{
                    "id": "47804200-5021-4733-9f0a-fe236d7403d6",
                    "link": "https://calendly.com/louise-11l",
                    "type": "link",
                    "question": "Hello! We've noticed your impressive usage of ElevenLabs!",
                    "buttonText": "Schedule",
                    "description": "Did you know our Enterprise plan could be a great fit for you? It's more cost-effective for high usage, and offers enhanced performance and security features. Reach out to louise@elevenlabs.io to learn more, or schedule a call with us below. Speak soon!"
                }],
                "conditions": {
                    "url": ""
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you! We're looking forward to getting in touch.",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-03-06T14:26:33.895000Z",
                "end_date": "2024-03-07T08:51:16.634000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018e1440-d444-0000-32ac-7ab19091ad50",
                "name": "Cross Functional In Product Outreach to Growing Business Tier (API not Toggled)",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-cross-functional-in-product-outreach-to-growing-business-tier-api-not-toggled",
                "questions": [{
                    "id": "30e66cd6-1c6f-415c-b4c3-03778536a35a",
                    "link": "https://calendly.com/louise-11l",
                    "type": "link",
                    "question": "Hello! We\u2019ve noticed your impressive usage of ElevenLabs!",
                    "buttonText": "Schedule",
                    "description": "Did you know our Enterprise plan could be a great fit for you? It\u2019s more cost-effective for high usage, offers enhanced performance and security features. Reach out to louise@elevenlabs.io to learn more, or schedule a call with us below. Speak soon!"
                }],
                "conditions": {
                    "url": ""
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you and speak soon!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-03-06T14:54:16.707000Z",
                "end_date": "2024-03-07T08:51:20.253000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018e2ce1-1e23-0000-81ae-341cdd50b4ae",
                "name": "Growing Business Pop-Up",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-growing-business-pop-up",
                "questions": [{
                    "id": "0e239add-07d8-454b-9b55-cc78b2535cd6",
                    "link": "https://calendly.com/louise-11l",
                    "type": "link",
                    "question": "Hello! We\u2019ve noticed your impressive usage of ElevenLabs!",
                    "buttonText": "Schedule",
                    "description": "Did you know our Enterprise plan could be a great fit for you? It\u2019s more cost-effective for high usage, offers enhanced performance and security features. Reach out to louise@elevenlabs.io to learn more, or schedule a call with us below. Speak soon!"
                }],
                "conditions": {
                    "url": "",
                    "urlMatchType": "icontains",
                    "seenSurveyWaitPeriodInDays": 7
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "autoDisappear": true,
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you and speak soon!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-03-11T09:39:37.574000Z",
                "end_date": "2024-03-22T12:07:42.869000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018e2f5e-31ba-0000-5833-ef33a57bb6ee",
                "name": "Account Cluster Outbound",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-account-cluster-outbound",
                "questions": [{
                    "id": "0fbe8bcd-ea7f-4c4b-ae38-3f32b7485f86",
                    "link": "https://calendly.com/louise-11l",
                    "type": "link",
                    "question": "Hello! We\u2019ve noticed your impressive usage of ElevenLabs!",
                    "buttonText": "Schedule",
                    "description": "Did you know our Enterprise plan could be a great fit for you? It\u2019s more cost-effective for high usage, offers enhanced performance and security features. Reach out to louise@elevenlabs.io to learn more, or schedule a call with us below. Speak soon!"
                }],
                "conditions": {
                    "url": "",
                    "seenSurveyWaitPeriodInDays": 7
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-03-11T21:15:12.002000Z",
                "end_date": "2024-03-22T12:07:37.865000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018e1445-2303-0000-601a-3dde5e802b68",
                "name": "Cross Functional In Product Outreach to Growing Business Tier (Lucas)",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-cross-functional-in-product-outreach-to-growing-business-tier-lucas",
                "questions": [{
                    "id": "86a90e16-9abf-4442-9443-dbda98c59a3c",
                    "link": "https://calendly.com/lucas_elevenlabs/30min?back=1&month=2024-03",
                    "type": "link",
                    "question": "Hello! We\u2019ve noticed your impressive usage of ElevenLabs!",
                    "buttonText": "Schedule",
                    "description": "Did you know our Enterprise plan could be a great fit for you? It\u2019s more cost-effective for high usage, offers enhanced performance and security features. Reach out to lucas@elevenlabs.io to learn more, or schedule a call with us below. Speak soon!"
                }],
                "conditions": {
                    "url": "",
                    "seenSurveyWaitPeriodInDays": 7
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you and speak soon!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-03-06T14:57:43.286000Z",
                "end_date": "2024-03-22T12:07:46.139000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "018ef724-aea5-0000-c688-54954086294d",
                "name": "Activation-Focused User Interviews",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-activation-focused-user-interviews",
                "questions": [{
                    "id": "245085b5-72cb-4d55-a6cc-757c35d3ce3d",
                    "link": "https://calendly.com/melanie-eleven/elevenlabs-user-interview",
                    "type": "link",
                    "question": "Would you be interested in participating in a customer interview?",
                    "buttonText": "Schedule a Call",
                    "description": "We are looking for feedback on our product and would love to hear from you! You'll be rewarded with free characters at the end of the call. "
                }],
                "conditions": {
                    "url": "",
                    "seenSurveyWaitPeriodInDays": 30
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-04-22T15:57:39.991000Z",
                "end_date": "2024-05-09T02:53:58.803000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "01909c59-c5d0-0000-e22e-292bf453bd94",
                "name": "Multi-seat alpha testers",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-893618f64c",
                "internal_targeting_flag_key": "survey-targeting-bcb0da5b97-custom",
                "questions": [{
                    "id": "4f5509d9-7d95-425c-86df-0ed0a554bd48",
                    "type": "single_choice",
                    "choices": ["Yes", "No"],
                    "question": "Are you interested in having multiple seats on your ElevenLabs account?",
                    "branching": {
                        "type": "response_based",
                        "responseValues": {
                            "1": "end"
                        }
                    },
                    "buttonText": "Submit",
                    "description": "We are piloting the ability to have multiple seats on your ElevenLabs account. We invite you to be one of the first to try it out!",
                    "hasOpenChoice": false,
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "text"
                }, {
                    "id": "0515af25-97e6-4357-970b-001c5a0690ff",
                    "type": "open",
                    "scale": 10,
                    "choices": ["Yes", "No"],
                    "display": "number",
                    "question": "How many users would you like to onboard?",
                    "buttonText": "Submit",
                    "description": "",
                    "lowerBoundLabel": "Unlikely",
                    "upperBoundLabel": "Very likely",
                    "originalQuestionIndex": 1,
                    "descriptionContentType": "text"
                }],
                "conditions": {
                    "url": "elevenlabs.io/app/"
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": false,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your response!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-07-10T13:26:56.227000Z",
                "end_date": "2024-07-15T11:09:22.002000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "01904ae9-1bc2-0000-81d7-00da8b37c44b",
                "name": "NPS -> Trustpilot",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-9147ee224b",
                "internal_targeting_flag_key": "survey-targeting-0d3eaf8df6-custom",
                "questions": [{
                    "id": "da378a63-7211-4f79-9e82-265aa4122310",
                    "type": "rating",
                    "scale": 10,
                    "display": "number",
                    "question": "How likely are you to recommend us to a friend?",
                    "branching": {
                        "type": "response_based",
                        "responseValues": {
                            "passives": 2,
                            "promoters": 1,
                            "detractors": 2
                        }
                    },
                    "description": "",
                    "lowerBoundLabel": "Unlikely",
                    "upperBoundLabel": "Very likely",
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "text"
                }, {
                    "id": "b2980b53-3444-4517-9247-5db324b64ca7",
                    "link": "https://www.trustpilot.com/evaluate/elevenlabs.io",
                    "type": "link",
                    "question": "We're glad you're enjoying ElevenLabs. Help us out by leaving a review on Trustpilot.",
                    "branching": {
                        "type": "end"
                    },
                    "buttonText": "Review on Trustpilot",
                    "description": "",
                    "originalQuestionIndex": 1,
                    "descriptionContentType": "text"
                }, {
                    "id": "3c5322fe-adf2-45a3-8328-b1da5b4bc647",
                    "type": "open",
                    "question": "How can we improve your experience?",
                    "buttonText": "Submit",
                    "description": "",
                    "originalQuestionIndex": 2,
                    "descriptionContentType": "text"
                }],
                "conditions": {
                    "url": "elevenlabs.io"
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-06-28T10:21:20.766000Z",
                "end_date": "2024-07-15T13:38:25.575000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "01919e4b-1a72-0000-bf96-a9eb955899f7",
                "name": "Starter Tier Discount",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-b3c355096e",
                "internal_targeting_flag_key": "survey-targeting-62bc261b22-custom",
                "questions": [{
                    "id": "eb922dc8-7b34-4f9f-82ce-d5aafea00705",
                    "link": "https://elevenlabs.io/app/subscription?coupon=25RV1G",
                    "type": "link",
                    "question": "ElevenLabs Starter Discount",
                    "buttonText": "Get 80% off Starter plan",
                    "description": "Increase your monthly quota and access Instant Voice Cloning with an 80% discount code for your first month on the Starter Plan.",
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "text"
                }],
                "conditions": {
                    "url": "https://elevenlabs.io/app"
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "submitButtonTextColor": "white",
                    "thankYouMessageHeader": "Looking forward to chatting with you!",
                    "displayThankYouMessage": false,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-08-29T18:38:42.363000Z",
                "end_date": "2024-09-09T12:05:53.282000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "01919f51-518b-0000-d8b2-a7085d9b0606",
                "name": "Publishing Waitlist Reader App",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-a568d9ce06",
                "internal_targeting_flag_key": "survey-targeting-bcac23ebff-custom",
                "questions": [{
                    "id": "1da89d13-82b7-4697-a270-0fb89e152c5c",
                    "link": "https://forms.gle/bR4kv7Qd1YkJQCWc9",
                    "type": "single_choice",
                    "choices": ["Join waitlist", "No thanks"],
                    "question": "Authors of Eleven, ",
                    "buttonText": "Submit",
                    "description": "are you interested in publishing your e-book to the ElevenLabs community, enabled for AI narration using one of our many high-quality voices? ",
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "text"
                }],
                "conditions": {
                    "url": "",
                    "seenSurveyWaitPeriodInDays": 30
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "submitButtonTextColor": "white",
                    "thankYouMessageHeader": "Thank you!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black",
                    "surveyPopupDelaySeconds": 3,
                    "thankYouMessageDescription": "For waitlist sign-ups, we will contact you via email soon.",
                    "thankYouMessageDescriptionContentType": "text"
                },
                "start_date": "2024-08-29T18:19:40.034000Z",
                "end_date": "2025-01-31T12:13:51.164000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "0191fb62-895e-0000-9245-dc33ede88de5",
                "name": "[VO Studio] Power users PMF",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-15c8a93a58",
                "internal_targeting_flag_key": "survey-targeting-e42656ae79-custom",
                "questions": [{
                    "id": "fadbba97-2658-46a7-9995-23ebf1d31da1",
                    "type": "single_choice",
                    "choices": ["Yes", "No"],
                    "question": "Do you have 1 minute?",
                    "branching": {
                        "type": "response_based",
                        "responseValues": {
                            "1": 4
                        }
                    },
                    "buttonText": "Submit",
                    "description": "Hi \ud83d\udc4b I'm Jonathan and I'm actively working on Voiceover Studio. Help me improve it for you by answering four short questions!",
                    "shuffleOptions": false,
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "text"
                }, {
                    "id": "4e0c304a-49ad-4ec6-a238-2703f571ffab",
                    "type": "single_choice",
                    "choices": ["Not disappointed", "Somewhat disappointed", "Very disappointed"],
                    "question": "Thank you! How would you feel if you could no longer use Voiceover Studio?",
                    "buttonText": "Onto Question 2",
                    "description": "",
                    "originalQuestionIndex": 1
                }, {
                    "id": "e7c94138-de8c-450b-83ca-ea24db797638",
                    "type": "open",
                    "question": "What type of videos are you making with Voiceover Studio?",
                    "buttonText": "Submit",
                    "description": "",
                    "originalQuestionIndex": 2,
                    "descriptionContentType": "text"
                }, {
                    "id": "4aa62861-970a-4466-8a38-293b88b5eaaa",
                    "type": "open",
                    "optional": false,
                    "question": "Which other tools are you using besides Voiceover Studio?",
                    "buttonText": "To the last question",
                    "description": "This can be any other software tools you use to help you create videos.",
                    "originalQuestionIndex": 3,
                    "descriptionContentType": "text"
                }, {
                    "id": "7a5f93f5-4f14-452e-a8c5-68751970b095",
                    "type": "open",
                    "question": "How can I improve Voiceover Studio for you?",
                    "buttonText": "Done \u2013 no more questions!",
                    "description": "",
                    "originalQuestionIndex": 4,
                    "descriptionContentType": "text"
                }],
                "conditions": {
                    "url": ""
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": false,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "submitButtonTextColor": "white",
                    "thankYouMessageHeader": "Thanks for taking the time!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black",
                    "thankYouMessageDescription": "Your feedback is highly valued \u2013 I'd love to talk to you if you have more thoughts to share. Feel free to reach out to jonathanl@elevenlabs.io",
                    "thankYouMessageCloseButtonText": "I'll email another time",
                    "thankYouMessageDescriptionContentType": null
                },
                "start_date": "2024-09-16T15:58:08.308000Z",
                "end_date": null,
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "019287e9-4bea-0000-e8b0-ce52f2a2eebf",
                "name": "Reader - HDYHAU",
                "type": "popover",
                "internal_targeting_flag_key": "survey-targeting-e1d974d0d3-custom",
                "questions": [{
                    "id": "784ac80a-611d-4993-8761-97076d9a9b86",
                    "type": "single_choice",
                    "choices": ["ElevenLabs web platform", "Newsletter / blog", "Social (TikTok/Instagram/X/Reddit)", "Recommended by a friend", "Press / news coverage", "Searched App Store / Play Store"],
                    "question": "How did you hear about this app?",
                    "buttonText": "Submit",
                    "description": "",
                    "shuffleOptions": true,
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "text"
                }],
                "conditions": {
                    "url": "",
                    "events": {
                        "values": [{
                            "name": "reader_home_scrolled_page"
                        }]
                    },
                    "seenSurveyWaitPeriodInDays": 3
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "autoDisappear": true,
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "submitButtonTextColor": "white",
                    "thankYouMessageHeader": "Thanks! ",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black",
                    "surveyPopupDelaySeconds": 4,
                    "thankYouMessageDescription": "We really appreciate your feedback.",
                    "thankYouMessageDescriptionContentType": null
                },
                "start_date": null,
                "end_date": null,
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "01920164-d712-0000-2d71-e80dbe1a7610",
                "name": "Voice: Naomi",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-02ff0049af",
                "internal_targeting_flag_key": "survey-targeting-0e2edc9b40-custom",
                "questions": [{
                    "id": "9be2472e-315a-4dca-b05b-b84bbe4edf42",
                    "type": "single_choice",
                    "choices": ["Yes", "No"],
                    "question": "Would you like to listen to Naomi Campbell read you a book, article, or PDF?",
                    "buttonText": "Submit",
                    "description": "",
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "text"
                }, {
                    "id": "f27ceede-1e21-42d9-be8f-943ae40e42df",
                    "type": "open",
                    "optional": true,
                    "question": "Name one or two celebrity or well-known voices you would like to listen to reading you a book or telling you a story.",
                    "buttonText": "Submit",
                    "description": "",
                    "originalQuestionIndex": 1,
                    "descriptionContentType": "text"
                }],
                "conditions": {
                    "url": ""
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": false,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "autoDisappear": true,
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "submitButtonTextColor": "white",
                    "thankYouMessageHeader": "Thanks and have a great day!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black",
                    "thankYouMessageDescription": "We really appreciate the feedback.",
                    "thankYouMessageDescriptionContentType": null
                },
                "start_date": "2024-09-17T19:13:58.001000Z",
                "end_date": "2024-09-18T02:49:21.971000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "01928c97-64c5-0000-6bfe-d9b297f22b68",
                "name": "IVC Use Cases",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-0405c75550",
                "internal_targeting_flag_key": "survey-targeting-19b78d230e-custom",
                "questions": [{
                    "id": "d12a7d5f-4ca1-4f7a-b099-66ba04be0c76",
                    "type": "open",
                    "question": "What do you plan to use voice cloning for?",
                    "description": "",
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "text"
                }],
                "conditions": {
                    "url": "",
                    "events": {
                        "values": [{
                            "name": "voice_lab_instant_voice_cloning_started"
                        }]
                    }
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "autoDisappear": true,
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "submitButtonTextColor": "white",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-10-14T19:54:21.554000Z",
                "end_date": "2024-10-14T20:55:22.182000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "01928cd0-770c-0000-a312-81497537f4cb",
                "name": "IVC Use Cases V2",
                "type": "popover",
                "targeting_flag_key": "survey-targeting-627d6c501e",
                "internal_targeting_flag_key": "survey-targeting-507f7cf3b5-custom",
                "questions": [{
                    "id": "9cb657d7-e484-405f-9900-30322409bef8",
                    "type": "multiple_choice",
                    "choices": ["My own voice ", "Voice of someone I know, e.g. friend or family member", "Voice of someone I don't know, e.g. celebrity", "Other"],
                    "question": "What do you plan to use voice cloning for?",
                    "buttonText": "Submit",
                    "description": "",
                    "hasOpenChoice": true,
                    "shuffleOptions": true,
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "text"
                }],
                "conditions": {
                    "url": "/app/voice-lab",
                    "events": {
                        "values": [{
                            "name": "voice_lab_instant_voice_cloning_created"
                        }]
                    }
                },
                "appearance": {
                    "position": "right",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "autoDisappear": true,
                    "backgroundColor": "#eeeded",
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "submitButtonTextColor": "white",
                    "thankYouMessageHeader": "Thank you for your feedback!",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black"
                },
                "start_date": "2024-10-14T21:01:07.914000Z",
                "end_date": "2024-10-15T13:41:26.844000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }, {
                "id": "01949dff-4b7a-0000-8199-d24183f71df3",
                "name": "[/docs/conversational-ai] feedback",
                "type": "popover",
                "internal_targeting_flag_key": "survey-targeting-aacee90844-custom",
                "questions": [{
                    "id": "d51015f1-088b-4e3e-b5f9-0508c6d4c7e0",
                    "type": "open",
                    "question": "Conversational AI feedback",
                    "description": "<strong>Shape our roadmap:</strong> Share your thoughts on how we can improve Conversational AI.",
                    "originalQuestionIndex": 0,
                    "descriptionContentType": "html"
                }],
                "conditions": {
                    "url": "/docs/conversational-ai/overview"
                },
                "appearance": {
                    "position": "left",
                    "fontFamily": "system-ui",
                    "whiteLabel": true,
                    "borderColor": "#c9c6c6",
                    "placeholder": "Start typing...",
                    "autoDisappear": true,
                    "backgroundColor": "#ffffff",
                    "shuffleQuestions": false,
                    "ratingButtonColor": "white",
                    "submitButtonColor": "black",
                    "submitButtonTextColor": "white",
                    "thankYouMessageHeader": "Feedback submitted",
                    "displayThankYouMessage": true,
                    "ratingButtonActiveColor": "black",
                    "thankYouMessageDescription": "",
                    "thankYouMessageDescriptionContentType": null
                },
                "start_date": "2025-01-25T15:08:52.484000Z",
                "end_date": "2025-02-10T11:58:50.981000Z",
                "current_iteration": null,
                "current_iteration_start_date": null,
                "schedule": "once",
                "enable_partial_responses": false
            }],
            "defaultIdentifiedOnly": true
        },
        siteApps: []
    }
})();