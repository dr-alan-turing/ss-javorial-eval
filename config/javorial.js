// configure the test here
var JavorialConfig = {
    "TestName": "Artifical Speech Synthesizer Evaluation",
    "RateScalePng": "img/scale_abs.png",
    "RateScaleBgPng": "img/scale_abs_background.png",
    "RateMinValue": 0,
    "RateMaxValue": 100,
    "RateDefaultValue": 0,
    "ShowFileIDs": false,
    "ShowResults": false,
    "LoopByDefault": false,
    "EnableABLoop": true,
    "EnableOnlineSubmission": true,
    "BeaqleServiceURL": "https://ss-javorial.000webhostapp.com/web_service/beaqleJS_Service.php",
    "SupervisorContact": "tomneckermann@gmail.com",
    "RandomizeTestOrder": true,
    "MaxTestsPerRun": 18,
    "RequireMaxRating": false,
    "Testsets": [
        {
            "Name": "Hyp1 T1",
            "TestID": "hyp_1_natural_1",
            "Files": {
                "1": "audio/hyp_1/1 l (1).wav",
                "2": "audio/hyp_1/1 a (1).wav",
                "3": "audio/hyp_1/1 ab (1).wav"
            }
        },
        {
            "Name": "Hyp1 T2",
            "TestID": "hyp_1_natural_2",
            "Files": {
                "1": "audio/hyp_1/1 l (2).wav",
                "2": "audio/hyp_1/1 a (2).wav",
                "3": "audio/hyp_1/1 ab (2).wav"
            }
        },
        {
            "Name": "Hyp1 T3",
            "TestID": "hyp_1_natural_3",
            "Files": {
                "1": "audio/hyp_1/1 l (3).wav",
                "2": "audio/hyp_1/1 a (3).wav",
                "3": "audio/hyp_1/1 ab (3).wav"
            }
        },
        {
            "Name": "Hyp1 T4",
            "TestID": "hyp_1_sus_1",
            "Files": {
                "1": "audio/hyp_1/2 l (1).wav",
                "2": "audio/hyp_1/2 a (1).wav",
                "3": "audio/hyp_1/2 ab (1).wav"
            }
        },
        {
            "Name": "Hyp1 T5",
            "TestID": "hyp_1_sus_2",
            "Files": {
                "1": "audio/hyp_1/2 l (2).wav",
                "2": "audio/hyp_1/2 a (2).wav",
                "3": "audio/hyp_1/2 ab (2).wav"
            }
        },
        {
            "Name": "Hyp1 T6",
            "TestID": "hyp_1_sus_3",
            "Files": {
                "1": "audio/hyp_1/2 l (3).wav",
                "2": "audio/hyp_1/2 a (3).wav",
                "3": "audio/hyp_1/2 ab (3).wav"
            }
        },
        {
            "Name": "Hyp2 T1",
            "TestID": "hyp_2_natural_1",
            "Files": {
                "1": "audio/hyp_2/1 d (1).wav",
                "2": "audio/hyp_2/1 ad (1).wav",
                "3": "audio/hyp_2/1 ab (1).wav"
            }
        },
        {
            "Name": "Hyp2 T2",
            "TestID": "hyp_2_natural_2",
            "Files": {
                "1": "audio/hyp_2/1 d (2).wav",
                "2": "audio/hyp_2/1 ad (2).wav",
                "3": "audio/hyp_2/1 ab (2).wav"
            }
        },
        {
            "Name": "Hyp2 T3",
            "TestID": "hyp_2_natural_3",
            "Files": {
                "1": "audio/hyp_2/1 d (3).wav",
                "2": "audio/hyp_2/1 ad (3).wav",
                "3": "audio/hyp_2/1 ab (3).wav"
            }
        },
        {
            "Name": "Hyp2 T4",
            "TestID": "hyp_2_domain_1",
            "Files": {
                "1": "audio/hyp_2/2 d (1).wav",
                "2": "audio/hyp_2/2 ad (1).wav",
                "3": "audio/hyp_2/2 ab (1).wav"
            }
        },
        {
            "Name": "Hyp2 T5",
            "TestID": "hyp_2_domain_2",
            "Files": {
                "1": "audio/hyp_2/2 d (2).wav",
                "2": "audio/hyp_2/2 ad (2).wav",
                "3": "audio/hyp_2/2 ab (2).wav"
            }
        },
        {
            "Name": "Hyp2 T6",
            "TestID": "hyp_2_domain_3",
            "Files": {
                "1": "audio/hyp_2/2 d (3).wav",
                "2": "audio/hyp_2/2 ad (3).wav",
                "3": "audio/hyp_2/2 ab (3).wav"
            }
        },
        {
            "Name": "Hyp3 T1",
            "TestID": "hyp_3_novel_1",
            "Files": {
                "1": "audio/hyp_3/1 d (1).wav",
                "2": "audio/hyp_3/1 ad (1).wav",
                "3": "audio/hyp_3/1 ab (1).wav",
                "4": "audio/hyp_3/1 abd (1).wav"
            }
        },
        {
            "Name": "Hyp3 T2",
            "TestID": "hyp_3_novel_2",
            "Files": {
                "1": "audio/hyp_3/1 d (2).wav",
                "2": "audio/hyp_3/1 ad (2).wav",
                "3": "audio/hyp_3/1 ab (2).wav",
                "4": "audio/hyp_3/1 abd (2).wav"
            }
        },
        {
            "Name": "Hyp3 T3",
            "TestID": "hyp_3_random_1",
            "Files": {
                "1": "audio/hyp_3/2 d (1).wav",
                "2": "audio/hyp_3/2 ad (1).wav",
                "3": "audio/hyp_3/2 ab (1).wav",
                "4": "audio/hyp_3/2 abd (1).wav"
            }
        },
        {
            "Name": "Hyp3 T4",
            "TestID": "hyp_3_random_2",
            "Files": {
                "1": "audio/hyp_3/2 d (2).wav",
                "2": "audio/hyp_3/2 ad (2).wav",
                "3": "audio/hyp_3/2 ab (2).wav",
                "4": "audio/hyp_3/2 abd (2).wav"
            }
        },
        {
            "Name": "Hyp3 T5",
            "TestID": "hyp_3_domain_1",
            "Files": {
                "1": "audio/hyp_3/3 d (1).wav",
                "2": "audio/hyp_3/3 ad (1).wav",
                "3": "audio/hyp_3/3 ab (1).wav",
                "4": "audio/hyp_3/3 abd (1).wav"
            }
        },
        {
            "Name": "Hyp3 T6",
            "TestID": "hyp_3_domain_2",
            "Files": {
                "1": "audio/hyp_3/3 d (2).wav",
                "2": "audio/hyp_3/3 ad (2).wav",
                "3": "audio/hyp_3/3 ab (2).wav",
                "4": "audio/hyp_3/3 abd (2).wav"
            }
        }
    ]
}
