const url = 'https://paranasdynaslope.com';
export const host = `${url}:5000`;
export const base_url = url;
export const storage_host = `${url}:8000`;
export const CBEWSL_SITE = 24;
export const WSS_KEY = "833c2bfed00681143663109354ee65f951f963797f0507a93bb13ea26b69557920cbde40ca6466540cddfb39cb0a4e03e0717dc26b7c0e655cba80bffedaa407"
export const TEST_ALERTS = [
    {
        "site_id": 11,
        "site_code": "dad",
        "internal_alert_level": "A3-M0R0",
        "public_alert_level": 3,
        "public_alert_symbol": "A3",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "M0R0"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            },
            {
                "trigger_source": "moms",
                "alert_level": -1,
                "alert_symbol": "m0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [
            {
                "op_trigger": 2,
                "moms_instance": {
                    "feature_name": "A",
                    "site_id": 11,
                    "location": "location",
                    "feature": {
                        "feature_id": 1,
                        "description": null,
                        "feature_type": "crack"
                    },
                    "site": {
                        "sitio": "Sagasa",
                        "longitude": 126.4509,
                        "region": "XI",
                        "area_code": 87,
                        "psgc": 112511003,
                        "purok": null,
                        "season": 1,
                        "site_code": "dad",
                        "barangay": "Dadong",
                        "site_id": 11,
                        "municipality": "Tarragona",
                        "active": true,
                        "households": "At least 4 households (17 residents), municipal road",
                        "province": "Davao Oriental",
                        "latitude": 7.13731
                    },
                    "instance_id": 121
                },
                "moms_id": 313,
                "remarks": "remarks",
                "observance_ts": "2022-04-11 07:45:00"
            },
            {
                "op_trigger": 3,
                "moms_instance": {
                    "feature_name": "B",
                    "site_id": 11,
                    "location": "Near LEWC Saavedra's house",
                    "feature": {
                        "feature_id": 7,
                        "description": null,
                        "feature_type": "slope failure"
                    },
                    "site": {
                        "sitio": "Sagasa",
                        "longitude": 126.4509,
                        "region": "XI",
                        "area_code": 87,
                        "psgc": 112511003,
                        "purok": null,
                        "season": 1,
                        "site_code": "dad",
                        "barangay": "Dadong",
                        "site_id": 11,
                        "municipality": "Tarragona",
                        "active": true,
                        "households": "At least 4 households (17 residents), municipal road",
                        "province": "Davao Oriental",
                        "latitude": 7.13731
                    },
                    "instance_id": 120
                },
                "moms_id": 310,
                "remarks": "affected a significant portion of the site based on LEWC description.",
                "observance_ts": "2022-03-24 15:17:00"
            }
        ],
        "previous_release": {
            "bulletin_number": 132,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2022-03-04 00:00:00",
                "ts_end": null,
                "event_alert_id": 4162,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 12371,
                    "site": {
                        "area_code": 87,
                        "region": "XI",
                        "barangay": "Dadong",
                        "season": 1,
                        "households": "At least 4 households (17 residents), municipal road",
                        "municipality": "Tarragona",
                        "site_code": "dad",
                        "purok": null,
                        "latitude": 7.13731,
                        "sitio": "Sagasa",
                        "province": "Davao Oriental",
                        "site_id": 11,
                        "longitude": 126.4509
                    },
                    "validity": null,
                    "event_start": "2022-03-04 00:00:00",
                    "site_id": 11,
                    "status": "1"
                }
            },
            "release_id": 50386,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": "ND",
            "internal_alert": "ND"
        },
        "validity_status": "partially valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "moms",
                "source_id": 6,
                "alert_level": 2,
                "trigger_id": 162057,
                "alert": "m2",
                "ts_updated": "2022-04-11 07:45:00",
                "internal_sym_id": 13,
                "tech_info": "Significant (crack) feature observed in site",
                "moms_list": [
                    {
                        "op_trigger": 2,
                        "moms_instance": {
                            "feature_name": "A",
                            "site_id": 11,
                            "location": "location",
                            "feature": {
                                "feature_id": 1,
                                "description": null,
                                "feature_type": "crack"
                            },
                            "site": {
                                "sitio": "Sagasa",
                                "longitude": 126.4509,
                                "region": "XI",
                                "area_code": 87,
                                "psgc": 112511003,
                                "purok": null,
                                "season": 1,
                                "site_code": "dad",
                                "barangay": "Dadong",
                                "site_id": 11,
                                "municipality": "Tarragona",
                                "active": true,
                                "households": "At least 4 households (17 residents), municipal road",
                                "province": "Davao Oriental",
                                "latitude": 7.13731
                            },
                            "instance_id": 121
                        },
                        "moms_id": 313,
                        "remarks": "remarks",
                        "observance_ts": "2022-04-11 07:45:00"
                    }
                ],
                "trigger_alert_level": "m2"
            },
            {
                "trigger_type": "moms",
                "source_id": 6,
                "alert_level": 3,
                "trigger_id": 162050,
                "alert": "m3",
                "ts_updated": "2022-03-24 15:17:00",
                "internal_sym_id": 7,
                "tech_info": "Critical (slope failure) feature observed in site",
                "moms_list": [],
                "trigger_alert_level": "m3"
            },
            {
                "trigger_type": "rainfall",
                "source_id": 3,
                "alert_level": 1,
                "trigger_id": 162027,
                "alert": "r1",
                "ts_updated": "2021-12-17 15:30:00",
                "internal_sym_id": 8,
                "rain_gauge": "RAIN DADRA",
                "tech_info": "RAIN DADRA (0.00 km away): 3-day cumulative rainfall (194.14 mm) exceeded threshold (161.79 mm)",
                "trigger_alert_level": "r1"
            },
            {
                "trigger_type": "surficial",
                "source_id": 2,
                "alert_level": 2,
                "trigger_id": 161826,
                "alert": "g2",
                "ts_updated": "2021-10-12 10:11:00",
                "internal_sym_id": 6,
                "tech_info": "Marker D: 100.5 cm difference in 70.68 hours",
                "invalid": true,
                "invalid_details": {
                    "ts_ack": "2021-10-15 13:28:40",
                    "user": {
                        "nickname": "CT Phone",
                        "ewi_recipient": 0,
                        "birthday": "1994-08-16",
                        "sex": "F",
                        "last_name": "Phone",
                        "status": 1,
                        "user_id": 548,
                        "first_name": "Community",
                        "middle_name": "Phone",
                        "ground_reminder_recipient": 0,
                        "salutation": "NA"
                    },
                    "alert_status": -1,
                    "remarks": "marker measurements for 2 markers deemed unreliable.",
                    "ts_last_retrigger": "2021-10-12 10:11:00",
                    "stat_id": 8749,
                    "ts_set": "2021-10-12 10:52:05"
                },
                "validating_status": -1,
                "trigger_alert_level": "g2"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 2,
        "site_code": "bak",
        "internal_alert_level": "A2-m0D",
        "public_alert_level": 2,
        "public_alert_symbol": "A2",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "m0D"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            },
            {
                "trigger_source": "on demand",
                "alert_level": 0,
                "alert_symbol": "d"
            },
            {
                "trigger_source": "moms",
                "alert_level": -1,
                "alert_symbol": "m0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [
            {
                "op_trigger": 2,
                "moms_instance": {
                    "feature_name": "F",
                    "site_id": 2,
                    "location": "Test",
                    "feature": {
                        "feature_id": 1,
                        "description": null,
                        "feature_type": "crack"
                    },
                    "site": {
                        "sitio": null,
                        "longitude": 120.660903,
                        "region": "CAR",
                        "area_code": 74,
                        "psgc": 141103009,
                        "purok": null,
                        "season": 2,
                        "site_code": "bak",
                        "barangay": "Poblacion",
                        "site_id": 2,
                        "municipality": "Bakun",
                        "active": true,
                        "households": "At least 31 households, Roman Catholic Church",
                        "province": "Benguet",
                        "latitude": 16.789631
                    },
                    "instance_id": 118
                },
                "moms_id": 308,
                "remarks": "Test",
                "observance_ts": "2022-03-24 14:52:00"
            }
        ],
        "previous_release": {
            "bulletin_number": 12,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2021-10-18 00:00:00",
                "ts_end": null,
                "event_alert_id": 3955,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 12233,
                    "site": {
                        "area_code": 74,
                        "region": "CAR",
                        "barangay": "Poblacion",
                        "season": 2,
                        "households": "At least 31 households, Roman Catholic Church",
                        "municipality": "Bakun",
                        "site_code": "bak",
                        "purok": null,
                        "latitude": 16.789631,
                        "sitio": null,
                        "province": "Benguet",
                        "site_id": 2,
                        "longitude": 120.660903
                    },
                    "validity": null,
                    "event_start": "2021-10-18 00:00:00",
                    "site_id": 2,
                    "status": "1"
                }
            },
            "release_id": 50351,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": null,
            "internal_alert": "A0"
        },
        "validity_status": "valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "on demand",
                "source_id": 5,
                "alert_level": 1,
                "trigger_id": 162078,
                "alert": "d1",
                "ts_updated": "2022-05-17 13:25:04",
                "internal_sym_id": 12,
                "tech_info": "Test",
                "od_details": {
                    "site_id": 2,
                    "eq_id": null,
                    "narrative": {
                        "site_id": 2,
                        "id": 163802,
                        "narrative": "Test",
                        "user_details": {
                            "nickname": null,
                            "ewi_recipient": 1,
                            "birthday": "1994-08-16",
                            "sex": "M",
                            "last_name": "Comila",
                            "status": 1,
                            "user_id": 318,
                            "first_name": "Alvin",
                            "middle_name": "NA",
                            "ground_reminder_recipient": 0,
                            "salutation": "Sir"
                        },
                        "user_id": 318,
                        "type_id": 1,
                        "timestamp": "2022-05-17 13:25:04",
                        "site": {
                            "sitio": null,
                            "longitude": 120.660903,
                            "region": "CAR",
                            "area_code": 74,
                            "psgc": 141103009,
                            "purok": null,
                            "season": 2,
                            "site_code": "bak",
                            "barangay": "Poblacion",
                            "site_id": 2,
                            "municipality": "Bakun",
                            "active": true,
                            "households": "At least 31 households, Roman Catholic Church",
                            "province": "Benguet",
                            "latitude": 16.789631
                        },
                        "event_id": 12361
                    },
                    "tech_info": "Test",
                    "reporter_id": 318,
                    "alert_level": 1,
                    "reporter": {
                        "nickname": null,
                        "ewi_recipient": 1,
                        "birthday": "1994-08-16",
                        "sex": "M",
                        "last_name": "Comila",
                        "status": 1,
                        "user_id": 318,
                        "first_name": "Alvin",
                        "middle_name": "NA",
                        "ground_reminder_recipient": 0,
                        "salutation": "Sir"
                    },
                    "approved_by": "TCB",
                    "od_id": 84,
                    "request_ts": "2022-05-17 13:25:04"
                },
                "trigger_alert_level": "d1"
            },
            {
                "trigger_type": "moms",
                "source_id": 6,
                "alert_level": 2,
                "trigger_id": 162048,
                "alert": "m2",
                "ts_updated": "2022-03-24 14:52:00",
                "internal_sym_id": 13,
                "tech_info": "Significant (crack) feature observed in site",
                "moms_list": [],
                "trigger_alert_level": "m2"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 5,
        "site_code": "bay",
        "internal_alert_level": "A2-m0",
        "public_alert_level": 2,
        "public_alert_symbol": "A2",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "m0"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            },
            {
                "trigger_source": "moms",
                "alert_level": -1,
                "alert_symbol": "m0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [
            {
                "op_trigger": 2,
                "moms_instance": {
                    "feature_name": "F",
                    "site_id": 5,
                    "location": "Near Brgy. hall",
                    "feature": {
                        "feature_id": 7,
                        "description": null,
                        "feature_type": "slope failure"
                    },
                    "site": {
                        "sitio": null,
                        "longitude": 122.4679,
                        "region": "V",
                        "area_code": 54,
                        "psgc": 51606009,
                        "purok": null,
                        "season": 1,
                        "site_code": "bay",
                        "barangay": "Bayabas",
                        "site_id": 5,
                        "municipality": "Labo",
                        "active": true,
                        "households": "At least 34 households (128 residents), Seedling Nursery, Maharlika (Pan-Philippine) Highway",
                        "province": "Camarines Norte",
                        "latitude": 14.18756
                    },
                    "instance_id": 64
                },
                "moms_id": 305,
                "remarks": "test",
                "observance_ts": "2022-03-07 19:00:48"
            }
        ],
        "previous_release": {
            "bulletin_number": 20,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2021-10-19 00:00:00",
                "ts_end": null,
                "event_alert_id": 3959,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 12237,
                    "site": {
                        "area_code": 54,
                        "region": "V",
                        "barangay": "Bayabas",
                        "season": 1,
                        "households": "At least 34 households (128 residents), Seedling Nursery, Maharlika (Pan-Philippine) Highway",
                        "municipality": "Labo",
                        "site_code": "bay",
                        "purok": null,
                        "latitude": 14.18756,
                        "sitio": null,
                        "province": "Camarines Norte",
                        "site_id": 5,
                        "longitude": 122.4679
                    },
                    "validity": null,
                    "event_start": "2021-10-19 00:00:00",
                    "site_id": 5,
                    "status": "1"
                }
            },
            "release_id": 50382,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": "ND",
            "internal_alert": "ND"
        },
        "validity_status": "valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "moms",
                "source_id": 6,
                "alert_level": 2,
                "trigger_id": 162043,
                "alert": "m2",
                "ts_updated": "2022-03-07 19:00:48",
                "internal_sym_id": 13,
                "tech_info": "Significant (slope failure) feature observed in site",
                "moms_list": [],
                "trigger_alert_level": "m2"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 18,
        "site_code": "ina",
        "internal_alert_level": "A2-s0R0",
        "public_alert_level": 2,
        "public_alert_symbol": "A2",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "s0R0"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 12,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2020-11-11 00:00:00",
                "ts_end": null,
                "event_alert_id": 3325,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 11831,
                    "site": {
                        "area_code": 32,
                        "region": "VI",
                        "barangay": "Inabasan",
                        "season": 2,
                        "households": "At least 12 households (59 residents)",
                        "municipality": "Maasin",
                        "site_code": "ina",
                        "purok": null,
                        "latitude": 10.86991,
                        "sitio": "Sambag",
                        "province": "Iloilo",
                        "site_id": 18,
                        "longitude": 122.4362
                    },
                    "validity": null,
                    "event_start": "2020-11-11 00:00:00",
                    "site_id": 18,
                    "status": "1"
                }
            },
            "release_id": 50359,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": null,
            "internal_alert": "A0"
        },
        "validity_status": "valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "subsurface",
                "source_id": 1,
                "alert_level": 2,
                "trigger_id": 162066,
                "alert": "s2",
                "ts_updated": "2022-04-18 16:00:21",
                "internal_sym_id": 3,
                "tech_info": "INATA (node 1) exceeded velocity threshold",
                "trigger_alert_level": "s2"
            },
            {
                "trigger_type": "rainfall",
                "source_id": 3,
                "alert_level": 1,
                "trigger_id": 162026,
                "alert": "r1",
                "ts_updated": "2021-12-17 10:30:00",
                "internal_sym_id": 8,
                "rain_gauge": "RAIN INAG",
                "tech_info": "RAIN INAG (0.00 km away): 3-day cumulative rainfall (137.81 mm) exceeded threshold (114.84 mm)",
                "trigger_alert_level": "r1"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 20,
        "site_code": "lab",
        "internal_alert_level": "A2-m0",
        "public_alert_level": 2,
        "public_alert_symbol": "A2",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "m0"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            },
            {
                "trigger_source": "moms",
                "alert_level": -1,
                "alert_symbol": "m0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [
            {
                "op_trigger": 2,
                "moms_instance": {
                    "feature_name": "A",
                    "site_id": 20,
                    "location": "ner brgy",
                    "feature": {
                        "feature_id": 1,
                        "description": null,
                        "feature_type": "crack"
                    },
                    "site": {
                        "sitio": "Labey",
                        "longitude": 120.7054,
                        "region": "CAR",
                        "area_code": 74,
                        "psgc": 141104001,
                        "purok": null,
                        "season": 2,
                        "site_code": "lab",
                        "barangay": "Ambuklao",
                        "site_id": 20,
                        "municipality": "Bokod",
                        "active": true,
                        "households": "At least 5 households (19 residents), Multipurpose hall",
                        "province": "Benguet",
                        "latitude": 16.47032
                    },
                    "instance_id": 115
                },
                "moms_id": 301,
                "remarks": "test",
                "observance_ts": "2022-01-26 13:45:00"
            },
            {
                "op_trigger": 2,
                "moms_instance": {
                    "feature_name": "A",
                    "site_id": 20,
                    "location": "near school",
                    "feature": {
                        "feature_id": 7,
                        "description": null,
                        "feature_type": "slope failure"
                    },
                    "site": {
                        "sitio": "Labey",
                        "longitude": 120.7054,
                        "region": "CAR",
                        "area_code": 74,
                        "psgc": 141104001,
                        "purok": null,
                        "season": 2,
                        "site_code": "lab",
                        "barangay": "Ambuklao",
                        "site_id": 20,
                        "municipality": "Bokod",
                        "active": true,
                        "households": "At least 5 households (19 residents), Multipurpose hall",
                        "province": "Benguet",
                        "latitude": 16.47032
                    },
                    "instance_id": 114
                },
                "moms_id": 300,
                "remarks": "test",
                "observance_ts": "2022-01-26 13:30:05"
            }
        ],
        "previous_release": {
            "bulletin_number": 12,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2021-10-19 00:00:00",
                "ts_end": null,
                "event_alert_id": 3958,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 12236,
                    "site": {
                        "area_code": 74,
                        "region": "CAR",
                        "barangay": "Ambuklao",
                        "season": 2,
                        "households": "At least 5 households (19 residents), Multipurpose hall",
                        "municipality": "Bokod",
                        "site_code": "lab",
                        "purok": null,
                        "latitude": 16.47032,
                        "sitio": "Labey",
                        "province": "Benguet",
                        "site_id": 20,
                        "longitude": 120.7054
                    },
                    "validity": null,
                    "event_start": "2021-10-19 00:00:00",
                    "site_id": 20,
                    "status": "1"
                }
            },
            "release_id": 50361,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": null,
            "internal_alert": "A0"
        },
        "validity_status": "valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "moms",
                "source_id": 6,
                "alert_level": 2,
                "trigger_id": 162030,
                "alert": "m2",
                "ts_updated": "2022-01-26 13:45:00",
                "internal_sym_id": 13,
                "tech_info": "Significant (crack) feature observed in site",
                "moms_list": [],
                "trigger_alert_level": "m2"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 22,
        "site_code": "lip",
        "internal_alert_level": "A2-m0",
        "public_alert_level": 2,
        "public_alert_symbol": "A2",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "m0"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            },
            {
                "trigger_source": "moms",
                "alert_level": -1,
                "alert_symbol": "m0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [
            {
                "op_trigger": 2,
                "moms_instance": {
                    "feature_name": "D",
                    "site_id": 22,
                    "location": null,
                    "feature": {
                        "feature_id": 7,
                        "description": null,
                        "feature_type": "slope failure"
                    },
                    "site": {
                        "sitio": null,
                        "longitude": 125.1266,
                        "region": "VIII",
                        "area_code": 55,
                        "psgc": 86412016,
                        "purok": "1",
                        "season": 1,
                        "site_code": "lip",
                        "barangay": "Lipanto",
                        "site_id": 22,
                        "municipality": "St. Bernard",
                        "active": true,
                        "households": "At least 11 households (56 residents), Jct Himay - Angan - Silago - Abuyog Boundary Road",
                        "province": "Southern Leyte",
                        "latitude": 10.22767
                    },
                    "instance_id": 62
                },
                "moms_id": 304,
                "remarks": "remobilization of landslide deposit from the January 2022 landslide",
                "observance_ts": "2022-03-02 19:00:37"
            }
        ],
        "previous_release": {
            "bulletin_number": 79,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2022-03-06 00:00:00",
                "ts_end": null,
                "event_alert_id": 4167,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 12374,
                    "site": {
                        "area_code": 55,
                        "region": "VIII",
                        "barangay": "Lipanto",
                        "season": 1,
                        "households": "At least 11 households (56 residents), Jct Himay - Angan - Silago - Abuyog Boundary Road",
                        "municipality": "St. Bernard",
                        "site_code": "lip",
                        "purok": "1",
                        "latitude": 10.22767,
                        "sitio": null,
                        "province": "Southern Leyte",
                        "site_id": 22,
                        "longitude": 125.1266
                    },
                    "validity": null,
                    "event_start": "2022-03-06 00:00:00",
                    "site_id": 22,
                    "status": "1"
                }
            },
            "release_id": 50388,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": "ND",
            "internal_alert": "ND"
        },
        "validity_status": "valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "moms",
                "source_id": 6,
                "alert_level": 2,
                "trigger_id": 162042,
                "alert": "m2",
                "ts_updated": "2022-03-02 19:00:37",
                "internal_sym_id": 13,
                "tech_info": "Significant (slope failure) feature observed in site",
                "moms_list": [],
                "trigger_alert_level": "m2"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 33,
        "site_code": "msu",
        "internal_alert_level": "ND",
        "public_alert_level": 0,
        "public_alert_symbol": "A0",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "ND"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 65,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2022-03-15 00:00:00",
                "ts_end": null,
                "event_alert_id": 4188,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 12388,
                    "site": {
                        "area_code": 84,
                        "region": "XI",
                        "barangay": "Sto. Nino",
                        "season": 1,
                        "households": "At least 7 households (32 residents), Kapalong-Talaingod-Valencia Road",
                        "municipality": "Talaingod",
                        "site_code": "msu",
                        "purok": null,
                        "latitude": 7.628743,
                        "sitio": "Upper Mesolong",
                        "province": "Davao del Norte",
                        "site_id": 33,
                        "longitude": 125.5403
                    },
                    "validity": null,
                    "event_start": "2022-03-15 00:00:00",
                    "site_id": 33,
                    "status": "1"
                }
            },
            "release_id": 50370,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": null,
            "internal_alert": "A0"
        },
        "validity_status": "invalid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "subsurface",
                "source_id": 1,
                "alert_level": 2,
                "trigger_id": 161997,
                "alert": "s2",
                "ts_updated": "2021-10-18 19:00:00",
                "internal_sym_id": 3,
                "tech_info": "MSUTA (node 6) exceeded displacement threshold; MSUTA (node 1) exceeded velocity threshold",
                "invalid": true,
                "invalid_details": {
                    "ts_ack": "2021-10-18 18:06:44",
                    "user": {
                        "nickname": "CT Phone",
                        "ewi_recipient": 0,
                        "birthday": "1994-08-16",
                        "sex": "F",
                        "last_name": "Phone",
                        "status": 1,
                        "user_id": 548,
                        "first_name": "Community",
                        "middle_name": "Phone",
                        "ground_reminder_recipient": 0,
                        "salutation": "NA"
                    },
                    "alert_status": -1,
                    "remarks": "Fluctuating data",
                    "ts_last_retrigger": "2021-10-18 18:00:00",
                    "stat_id": 8786,
                    "ts_set": "2021-10-18 18:02:05"
                },
                "validating_status": -1,
                "trigger_alert_level": "s2"
            },
            {
                "trigger_type": "rainfall",
                "source_id": 3,
                "alert_level": 1,
                "trigger_id": 161941,
                "alert": "r1",
                "ts_updated": "2021-10-15 14:30:00",
                "internal_sym_id": 8,
                "rain_gauge": "RAIN MSUTA",
                "tech_info": "RAIN MSUTA (0.00 km away): 1-day cumulative rainfall (60.60 mm) exceeded threshold (58.10 mm)",
                "invalid": true,
                "invalid_details": {
                    "ts_ack": "2021-10-15 14:18:16",
                    "user": {
                        "nickname": "CT Phone",
                        "ewi_recipient": 0,
                        "birthday": "1994-08-16",
                        "sex": "F",
                        "last_name": "Phone",
                        "status": 1,
                        "user_id": 548,
                        "first_name": "Community",
                        "middle_name": "Phone",
                        "ground_reminder_recipient": 0,
                        "salutation": "NA"
                    },
                    "alert_status": -1,
                    "remarks": "Alert was caused by a tagged invalid 46mm spike in rainfall data  ( Oct 14, 2021 15:30 )",
                    "ts_last_retrigger": "2021-10-15 14:00:00",
                    "stat_id": 8774,
                    "ts_set": "2021-10-15 14:32:04"
                },
                "validating_status": -1,
                "trigger_alert_level": "r1"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 7,
        "site_code": "bol",
        "internal_alert_level": "ND-R0",
        "public_alert_level": 1,
        "public_alert_symbol": "A1",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "ND-R0"
        },
        "general_status": "on-going",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 54,
            "release_time": "14:09:00",
            "event_alert": {
                "ts_start": "2022-03-30 14:00:00",
                "ts_end": null,
                "event_alert_id": 4194,
                "public_alert_symbol": {
                    "pub_sym_id": 2,
                    "recommended_response": "Prepare to respond to higher alerts.",
                    "alert_type": "event",
                    "alert_symbol": "A1",
                    "alert_level": 1,
                    "duration": 24
                },
                "event": {
                    "event_id": 12394,
                    "site": {
                        "area_code": 53,
                        "region": "VIII",
                        "barangay": "Bolodbolod",
                        "season": 1,
                        "households": "No households at risk",
                        "municipality": "St. Bernard",
                        "site_code": "bol",
                        "purok": "3 & 4",
                        "latitude": 10.30199,
                        "sitio": null,
                        "province": "Southern Leyte",
                        "site_id": 7,
                        "longitude": 125.1279
                    },
                    "validity": "2022-03-31 16:00:00",
                    "event_start": "2022-03-30 14:00:00",
                    "site_id": 7,
                    "status": "2"
                }
            },
            "release_id": 50405,
            "comments": "",
            "data_ts": "2022-03-30 14:00:00",
            "with_retrigger_validation": false,
            "trigger_list": "ND-D",
            "internal_alert": "ND-D"
        },
        "validity_status": "valid",
        "release_schedule": "2022-09-28 15:30:00",
        "is_release_time": false,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "rainfall",
                "source_id": 3,
                "alert_level": 1,
                "trigger_id": 162017,
                "alert": "r1",
                "ts_updated": "2021-12-09 11:30:58",
                "internal_sym_id": 8,
                "rain_gauge": "RAIN BOLRA",
                "tech_info": "RAIN BOLRA (0.38 km away): 1-day and 3-day cumulative rainfall (78.07 and 156.14 mm) exceeded threshold (65.06 and 130.12 mm)",
                "trigger_alert_level": "r1"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": [
            {
                "internal_sym": {
                    "trigger_symbol": {
                        "trigger_sym_id": 16,
                        "alert_description": "monitoring requested by community",
                        "alert_symbol": "d1",
                        "alert_level": 1,
                        "trigger_hierarchy": {
                            "is_ground": 0,
                            "data_interval": "discrete",
                            "hierarchy_id": 6,
                            "is_active": 1,
                            "is_default": 1,
                            "data_presence": 2,
                            "source_id": 5,
                            "trigger_source": "on demand"
                        },
                        "source_id": 5
                    },
                    "trigger_sym_id": 16,
                    "alert_description": null,
                    "alert_symbol": "D",
                    "internal_sym_id": 12
                },
                "trigger_id": 13369,
                "info": "acsdasdc",
                "release_id": 50405,
                "trigger_misc": {
                    "moms_releases": [],
                    "has_moms": false,
                    "od_id": 74,
                    "on_demand": null,
                    "eq_id": null,
                    "trig_misc_id": 279,
                    "eq": null
                },
                "ts": "2022-03-30 14:09:00"
            }
        ]
    },
    {
        "site_id": 8,
        "site_code": "bto",
        "internal_alert_level": "ND-R0",
        "public_alert_level": 1,
        "public_alert_symbol": "A1",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "ND-R0"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 20,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2021-09-23 00:00:00",
                "ts_end": null,
                "event_alert_id": 3878,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 12188,
                    "site": {
                        "area_code": 32,
                        "region": "VII",
                        "barangay": "Bato",
                        "season": 1,
                        "households": "At least 20 households (87 residents), barangay hall, Sibonga-Dumanjug Road",
                        "municipality": "Sibonga",
                        "site_code": "bto",
                        "purok": null,
                        "latitude": 10.01394,
                        "sitio": null,
                        "province": "Cebu",
                        "site_id": 8,
                        "longitude": 123.578371
                    },
                    "validity": null,
                    "event_start": "2021-09-23 00:00:00",
                    "site_id": 8,
                    "status": "1"
                }
            },
            "release_id": 50384,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": "ND",
            "internal_alert": "ND"
        },
        "validity_status": "valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "rainfall",
                "source_id": 3,
                "alert_level": 1,
                "trigger_id": 162019,
                "alert": "r1",
                "ts_updated": "2021-12-09 11:30:43",
                "internal_sym_id": 8,
                "rain_gauge": "RAIN BTOG",
                "tech_info": "RAIN BTOG (0.00 km away): 1-day cumulative rainfall (46.86 mm) exceeded threshold (39.05 mm)",
                "trigger_alert_level": "r1"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 9,
        "site_code": "car",
        "internal_alert_level": "ND-R0",
        "public_alert_level": 1,
        "public_alert_symbol": "A1",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "ND-R0"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 20,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2021-06-07 00:00:00",
                "ts_end": null,
                "event_alert_id": 3736,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 12091,
                    "site": {
                        "area_code": 86,
                        "region": "XIII",
                        "barangay": "San Carlos",
                        "season": 1,
                        "households": "At least 23 households (at least 129 residents), Iglesia Filipina Independiente",
                        "municipality": "Dapa",
                        "site_code": "car",
                        "purok": null,
                        "latitude": 9.719629,
                        "sitio": null,
                        "province": "Surigao del Norte",
                        "site_id": 9,
                        "longitude": 125.9737
                    },
                    "validity": null,
                    "event_start": "2021-06-07 00:00:00",
                    "site_id": 9,
                    "status": "1"
                }
            },
            "release_id": 50353,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": null,
            "internal_alert": "A0"
        },
        "validity_status": "valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "rainfall",
                "source_id": 3,
                "alert_level": 1,
                "trigger_id": 162034,
                "alert": "r1",
                "ts_updated": "2022-02-22 10:30:00",
                "internal_sym_id": 8,
                "rain_gauge": "RAIN CARTC",
                "tech_info": "RAIN CARTC (0.02 km away): 1-day and 3-day cumulative rainfall (99.69 and 199.39 mm) exceeded threshold (83.08 and 166.16 mm)",
                "trigger_alert_level": "r1"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 12,
        "site_code": "gaa",
        "internal_alert_level": "ND-R0",
        "public_alert_level": 1,
        "public_alert_symbol": "A1",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "ND-R0"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 20,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2020-06-20 00:00:00",
                "ts_end": null,
                "event_alert_id": 2977,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 11623,
                    "site": {
                        "area_code": 32,
                        "region": "VII",
                        "barangay": "Gaas",
                        "season": 1,
                        "households": "At least 19 households (98 residents), Gaas Elementary School",
                        "municipality": "Balamban",
                        "site_code": "gaa",
                        "purok": null,
                        "latitude": 10.42352,
                        "sitio": null,
                        "province": "Cebu",
                        "site_id": 12,
                        "longitude": 123.7851
                    },
                    "validity": null,
                    "event_start": "2020-06-20 00:00:00",
                    "site_id": 12,
                    "status": "1"
                }
            },
            "release_id": 50387,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": "ND",
            "internal_alert": "ND"
        },
        "validity_status": "valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "rainfall",
                "source_id": 3,
                "alert_level": 1,
                "trigger_id": 162028,
                "alert": "r1",
                "ts_updated": "2021-12-17 15:30:00",
                "internal_sym_id": 8,
                "rain_gauge": "RAIN GAATC",
                "tech_info": "RAIN GAATC (0.05 km away): 3-day cumulative rainfall (108.93 mm) exceeded threshold (90.78 mm)",
                "trigger_alert_level": "r1"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 25,
        "site_code": "lte",
        "internal_alert_level": "ND-R0",
        "public_alert_level": 1,
        "public_alert_symbol": "A1",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "ND-R0"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 55,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2022-03-04 00:00:00",
                "ts_end": null,
                "event_alert_id": 4163,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 12372,
                    "site": {
                        "area_code": 55,
                        "region": "VIII",
                        "barangay": "Literon",
                        "season": 1,
                        "households": "At least 17 households (74 residents)",
                        "municipality": "Calbiga",
                        "site_code": "lte",
                        "purok": null,
                        "latitude": 11.59024,
                        "sitio": null,
                        "province": "Samar",
                        "site_id": 25,
                        "longitude": 125.09145
                    },
                    "validity": null,
                    "event_start": "2022-03-04 00:00:00",
                    "site_id": 25,
                    "status": "1"
                }
            },
            "release_id": 50389,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": "ND",
            "internal_alert": "ND"
        },
        "validity_status": "valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "rainfall",
                "source_id": 3,
                "alert_level": 1,
                "trigger_id": 162039,
                "alert": "r1",
                "ts_updated": "2022-02-24 14:30:00",
                "internal_sym_id": 8,
                "rain_gauge": "RAIN LAYSB",
                "tech_info": "RAIN LAYSB (9.67 km away): 1-day and 3-day cumulative rainfall (79.04 and 158.07 mm) exceeded threshold (65.86 and 131.73 mm)",
                "trigger_alert_level": "r1"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 30,
        "site_code": "mca",
        "internal_alert_level": "ND-R0",
        "public_alert_level": 1,
        "public_alert_symbol": "A1",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "ND-R0"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 20,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2021-01-13 00:00:00",
                "ts_end": null,
                "event_alert_id": 3472,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 11929,
                    "site": {
                        "area_code": 85,
                        "region": "XIII",
                        "barangay": "Mac-Arthur",
                        "season": 1,
                        "households": "At least 30 households (115 residents), barangay hall, health center, multipurpose hall, church",
                        "municipality": "Esperanza",
                        "site_code": "mca",
                        "purok": null,
                        "latitude": 8.585882,
                        "sitio": null,
                        "province": "Agusan del Sur",
                        "site_id": 30,
                        "longitude": 125.7409
                    },
                    "validity": null,
                    "event_start": "2021-01-13 00:00:00",
                    "site_id": 30,
                    "status": "1"
                }
            },
            "release_id": 50390,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": "ND",
            "internal_alert": "ND"
        },
        "validity_status": "valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "rainfall",
                "source_id": 3,
                "alert_level": 1,
                "trigger_id": 162004,
                "alert": "r1",
                "ts_updated": "2021-10-20 13:00:00",
                "internal_sym_id": 8,
                "rain_gauge": "RAIN MCATA",
                "tech_info": "RAIN MCATA (0.05 km away): 1-day cumulative rainfall (96.85 mm) exceeded threshold (80.71 mm)",
                "validating_status": 1,
                "trigger_alert_level": "r1"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 37,
        "site_code": "par",
        "internal_alert_level": "ND-R0",
        "public_alert_level": 1,
        "public_alert_symbol": "A1",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "ND-R0"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 39,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2022-03-01 00:00:00",
                "ts_end": null,
                "event_alert_id": 4156,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 12367,
                    "site": {
                        "area_code": 55,
                        "region": "VIII",
                        "barangay": "Parasanon",
                        "season": 1,
                        "households": "At least 44 households (216 residents), Pan-Philippine Highway",
                        "municipality": "Pinabacdao",
                        "site_code": "par",
                        "purok": null,
                        "latitude": 11.51487,
                        "sitio": null,
                        "province": "Samar",
                        "site_id": 37,
                        "longitude": 125.0255
                    },
                    "validity": null,
                    "event_start": "2022-03-01 00:00:00",
                    "site_id": 37,
                    "status": "1"
                }
            },
            "release_id": 50373,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": null,
            "internal_alert": "A0"
        },
        "validity_status": "valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "rainfall",
                "source_id": 3,
                "alert_level": 1,
                "trigger_id": 162038,
                "alert": "r1",
                "ts_updated": "2022-02-24 14:30:00",
                "internal_sym_id": 8,
                "rain_gauge": "RAIN LAYSB",
                "tech_info": "RAIN LAYSB (1.74 km away): 1-day and 3-day cumulative rainfall (78.69 and 157.37 mm) exceeded threshold (65.57 and 131.15 mm)",
                "trigger_alert_level": "r1"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 39,
        "site_code": "pin",
        "internal_alert_level": "ND-R0",
        "public_alert_level": 1,
        "public_alert_symbol": "A1",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "ND-R0"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 20,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2018-01-09 11:30:00",
                "ts_end": null,
                "event_alert_id": 1475,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 4063,
                    "site": {
                        "area_code": 42,
                        "region": "IV-A",
                        "barangay": "Pinagkamaligan",
                        "season": 1,
                        "households": "At least 17 households (at least 64 residents); portion of Rizal Street",
                        "municipality": "Calauag",
                        "site_code": "pin",
                        "purok": null,
                        "latitude": 13.9536,
                        "sitio": null,
                        "province": "Quezon",
                        "site_id": 39,
                        "longitude": 122.2855
                    },
                    "validity": null,
                    "event_start": "2017-12-19 08:00:00",
                    "site_id": 39,
                    "status": "1"
                }
            },
            "release_id": 50375,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": null,
            "internal_alert": "A0"
        },
        "validity_status": "valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "rainfall",
                "source_id": 3,
                "alert_level": 1,
                "trigger_id": 162006,
                "alert": "r1",
                "ts_updated": "2021-10-20 13:30:00",
                "internal_sym_id": 8,
                "rain_gauge": "RAIN PINRA",
                "tech_info": "RAIN PINRA (0.00 km away): 1-day and 3-day cumulative rainfall (110.01 and 220.01 mm) exceeded threshold (91.67 and 183.35 mm)",
                "validating_status": 1,
                "trigger_alert_level": "r1"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 47,
        "site_code": "tal",
        "internal_alert_level": "ND-D0",
        "public_alert_level": 1,
        "public_alert_symbol": "A1",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "ND-D0"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            },
            {
                "trigger_source": "on demand",
                "alert_level": -1,
                "alert_symbol": "d0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 88,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2022-03-16 00:00:00",
                "ts_end": null,
                "event_alert_id": 4189,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 12389,
                    "site": {
                        "area_code": 53,
                        "region": "VIII",
                        "barangay": "Talahid",
                        "season": 1,
                        "households": "At least 6 households (20 residents), Iglesia Filipina Independiente, Talahid Elementary School, section of Biliran Circumferential Road",
                        "municipality": "Almeria",
                        "site_code": "tal",
                        "purok": null,
                        "latitude": 11.63742,
                        "sitio": null,
                        "province": "Biliran",
                        "site_id": 47,
                        "longitude": 124.3665
                    },
                    "validity": null,
                    "event_start": "2022-03-16 00:00:00",
                    "site_id": 47,
                    "status": "1"
                }
            },
            "release_id": 50395,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": "ND",
            "internal_alert": "ND"
        },
        "validity_status": "valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "on demand",
                "source_id": 5,
                "alert_level": 1,
                "trigger_id": 162011,
                "alert": "d1",
                "ts_updated": "2021-11-19 13:19:40",
                "internal_sym_id": 12,
                "tech_info": "test OD",
                "od_details": {
                    "site_id": 47,
                    "eq_id": 3464369,
                    "narrative": {
                        "site_id": 47,
                        "id": 154566,
                        "narrative": "test OD",
                        "user_details": {
                            "nickname": "",
                            "ewi_recipient": 1,
                            "birthday": null,
                            "sex": null,
                            "last_name": "Sanoy",
                            "status": 1,
                            "user_id": 797,
                            "first_name": "Richard",
                            "middle_name": "",
                            "ground_reminder_recipient": 0,
                            "salutation": null
                        },
                        "user_id": 797,
                        "type_id": 1,
                        "timestamp": "2021-11-19 13:19:40",
                        "site": {
                            "sitio": null,
                            "longitude": 124.3665,
                            "region": "VIII",
                            "area_code": 53,
                            "psgc": 87801012,
                            "purok": null,
                            "season": 1,
                            "site_code": "tal",
                            "barangay": "Talahid",
                            "site_id": 47,
                            "municipality": "Almeria",
                            "active": true,
                            "households": "At least 6 households (20 residents), Iglesia Filipina Independiente, Talahid Elementary School, section of Biliran Circumferential Road",
                            "province": "Biliran",
                            "latitude": 11.63742
                        },
                        "event_id": 12239
                    },
                    "tech_info": "test OD",
                    "reporter_id": 797,
                    "alert_level": 1,
                    "reporter": {
                        "nickname": "",
                        "ewi_recipient": 1,
                        "birthday": null,
                        "sex": null,
                        "last_name": "Sanoy",
                        "status": 1,
                        "user_id": 797,
                        "first_name": "Richard",
                        "middle_name": "",
                        "ground_reminder_recipient": 0,
                        "salutation": null
                    },
                    "approved_by": "",
                    "od_id": 66,
                    "request_ts": "2021-11-19 13:19:40"
                },
                "trigger_alert_level": "d1"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 48,
        "site_code": "tga",
        "internal_alert_level": "ND-D0",
        "public_alert_level": 1,
        "public_alert_symbol": "A1",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "ND-D0"
        },
        "general_status": "onset",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            },
            {
                "trigger_source": "on demand",
                "alert_level": -1,
                "alert_symbol": "d0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 12,
            "release_time": "11:51:08",
            "event_alert": {
                "ts_start": "2021-11-22 00:00:00",
                "ts_end": null,
                "event_alert_id": 4022,
                "public_alert_symbol": {
                    "pub_sym_id": 1,
                    "recommended_response": "Proceed with daily activities.",
                    "alert_type": "routine",
                    "alert_symbol": "A0",
                    "alert_level": 0,
                    "duration": 0
                },
                "event": {
                    "event_id": 12279,
                    "site": {
                        "area_code": 74,
                        "region": "CAR",
                        "barangay": "Taga",
                        "season": 2,
                        "households": "At least 24 households (114 residents), church",
                        "municipality": "Pinukpuk",
                        "site_code": "tga",
                        "purok": null,
                        "latitude": 17.57347,
                        "sitio": null,
                        "province": "Kalinga",
                        "site_id": 48,
                        "longitude": 121.3834
                    },
                    "validity": null,
                    "event_start": "2021-11-22 00:00:00",
                    "site_id": 48,
                    "status": "1"
                }
            },
            "release_id": 50396,
            "comments": "",
            "data_ts": "2022-03-16 11:30:00",
            "with_retrigger_validation": false,
            "trigger_list": "ND",
            "internal_alert": "ND"
        },
        "validity_status": "valid",
        "release_schedule": "None",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [
            {
                "trigger_type": "on demand",
                "source_id": 5,
                "alert_level": 1,
                "trigger_id": 162054,
                "alert": "d1",
                "ts_updated": "2022-04-06 09:41:02",
                "internal_sym_id": 12,
                "tech_info": "Tech info",
                "od_details": {
                    "site_id": 48,
                    "eq_id": null,
                    "narrative": {
                        "site_id": 48,
                        "id": 161353,
                        "narrative": "Tech info",
                        "user_details": {
                            "nickname": null,
                            "ewi_recipient": 1,
                            "birthday": null,
                            "sex": null,
                            "last_name": "Catriz",
                            "status": 1,
                            "user_id": 246,
                            "first_name": "Felipe",
                            "middle_name": "NA",
                            "ground_reminder_recipient": 0,
                            "salutation": null
                        },
                        "user_id": 246,
                        "type_id": 1,
                        "timestamp": "2022-04-06 09:41:02",
                        "site": {
                            "sitio": null,
                            "longitude": 121.3834,
                            "region": "CAR",
                            "area_code": 74,
                            "psgc": 143209022,
                            "purok": null,
                            "season": 2,
                            "site_code": "tga",
                            "barangay": "Taga",
                            "site_id": 48,
                            "municipality": "Pinukpuk",
                            "active": true,
                            "households": "At least 24 households (114 residents), church",
                            "province": "Kalinga",
                            "latitude": 17.57347
                        },
                        "event_id": 12229
                    },
                    "tech_info": "Tech info",
                    "reporter_id": 246,
                    "alert_level": 1,
                    "reporter": {
                        "nickname": null,
                        "ewi_recipient": 1,
                        "birthday": null,
                        "sex": null,
                        "last_name": "Catriz",
                        "status": 1,
                        "user_id": 246,
                        "first_name": "Felipe",
                        "middle_name": "NA",
                        "ground_reminder_recipient": 0,
                        "salutation": null
                    },
                    "approved_by": "",
                    "od_id": 69,
                    "request_ts": "2022-04-06 09:41:02"
                },
                "trigger_alert_level": "d1"
            }
        ],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 1,
        "site_code": "agb",
        "internal_alert_level": "ND",
        "public_alert_level": 0,
        "public_alert_symbol": "A0",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "ND"
        },
        "general_status": "lowering",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 21,
            "release_time": "16:04:00",
            "event_alert": {
                "ts_start": "2022-03-29 15:00:00",
                "ts_end": null,
                "event_alert_id": 4192,
                "public_alert_symbol": {
                    "pub_sym_id": 2,
                    "recommended_response": "Prepare to respond to higher alerts.",
                    "alert_type": "event",
                    "alert_symbol": "A1",
                    "alert_level": 1,
                    "duration": 24
                },
                "event": {
                    "event_id": 12392,
                    "site": {
                        "area_code": 36,
                        "region": "VI",
                        "barangay": "Agbatuan",
                        "season": 1,
                        "households": "15 households (52 residents), Agbatuan Elementary School",
                        "municipality": "Dumarao",
                        "site_code": "agb",
                        "purok": null,
                        "latitude": 11.28082,
                        "sitio": null,
                        "province": "Capiz",
                        "site_id": 1,
                        "longitude": 122.8313
                    },
                    "validity": "2022-03-30 16:00:00",
                    "event_start": "2022-03-29 15:00:00",
                    "site_id": 1,
                    "status": "2"
                }
            },
            "release_id": 50403,
            "comments": "",
            "data_ts": "2022-03-29 15:00:00",
            "with_retrigger_validation": false,
            "trigger_list": "ND-D0",
            "internal_alert": "ND-D0"
        },
        "validity_status": "valid",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 3,
        "site_code": "ban",
        "internal_alert_level": "ND",
        "public_alert_level": 0,
        "public_alert_symbol": "A0",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "ND"
        },
        "general_status": "lowering",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 21,
            "release_time": "14:01:00",
            "event_alert": {
                "ts_start": "2022-03-30 14:00:00",
                "ts_end": null,
                "event_alert_id": 4193,
                "public_alert_symbol": {
                    "pub_sym_id": 2,
                    "recommended_response": "Prepare to respond to higher alerts.",
                    "alert_type": "event",
                    "alert_symbol": "A1",
                    "alert_level": 1,
                    "duration": 24
                },
                "event": {
                    "event_id": 12393,
                    "site": {
                        "area_code": 38,
                        "region": "VII",
                        "barangay": "Banlasan",
                        "season": 1,
                        "households": "4 households (14 residents), Causwagan-Pawa Road",
                        "municipality": "Calape",
                        "site_code": "ban",
                        "purok": "6",
                        "latitude": 9.888559,
                        "sitio": "Pangas",
                        "province": "Bohol",
                        "site_id": 3,
                        "longitude": 123.9488
                    },
                    "validity": "2022-03-31 16:00:00",
                    "event_start": "2022-03-30 14:00:00",
                    "site_id": 3,
                    "status": "2"
                }
            },
            "release_id": 50404,
            "comments": "c",
            "data_ts": "2022-03-30 14:00:00",
            "with_retrigger_validation": false,
            "trigger_list": "ND-D",
            "internal_alert": "ND-D"
        },
        "validity_status": "valid",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [],
        "has_ground_data": false,
        "saved_event_triggers": []
    },
    {
        "site_id": 41,
        "site_code": "png",
        "internal_alert_level": "ND",
        "public_alert_level": 0,
        "public_alert_symbol": "A0",
        "release_details": {
            "data_ts": "2022-06-07 13:00:00",
            "trigger_list_str": "ND"
        },
        "general_status": "lowering",
        "current_triggers_status": [
            {
                "trigger_source": "subsurface",
                "alert_level": -1,
                "alert_symbol": "s0",
                "trigger_details": []
            },
            {
                "trigger_source": "surficial",
                "alert_level": -1,
                "alert_symbol": "g0"
            },
            {
                "trigger_source": "rainfall",
                "alert_level": -1,
                "alert_symbol": "r0"
            }
        ],
        "non_triggering_moms": [],
        "unresolved_moms_list": [],
        "previous_release": {
            "bulletin_number": 107,
            "release_time": "03:50:00",
            "event_alert": {
                "ts_start": "2022-03-21 22:00:00",
                "ts_end": null,
                "event_alert_id": 4191,
                "public_alert_symbol": {
                    "pub_sym_id": 2,
                    "recommended_response": "Prepare to respond to higher alerts.",
                    "alert_type": "event",
                    "alert_symbol": "A1",
                    "alert_level": 1,
                    "duration": 24
                },
                "event": {
                    "event_id": 12391,
                    "site": {
                        "area_code": 56,
                        "region": "V",
                        "barangay": "Pange",
                        "season": 1,
                        "households": "At least 8 households (51 residents)",
                        "municipality": "Matnog",
                        "site_code": "png",
                        "purok": null,
                        "latitude": 12.63063,
                        "sitio": null,
                        "province": "Sorsogon",
                        "site_id": 41,
                        "longitude": 124.0183
                    },
                    "validity": "2022-03-23 04:00:00",
                    "event_start": "2022-03-21 22:00:00",
                    "site_id": 41,
                    "status": "2"
                }
            },
            "release_id": 50402,
            "comments": "",
            "data_ts": "2022-03-22 03:30:00",
            "with_retrigger_validation": false,
            "trigger_list": "R",
            "internal_alert": "A1-R"
        },
        "validity_status": "valid",
        "is_release_time": true,
        "to_extend_validity": true,
        "trigger_list_arr": [],
        "has_ground_data": false,
        "saved_event_triggers": []
    }
];

export const TEST_ONGOING = [
    {
        "ts_start": "2022-03-30 14:00:00",
        "ts_end": null,
        "event_alert_id": 4194,
        "public_alert_symbol": {
            "pub_sym_id": 2,
            "recommended_response": "Prepare to respond to higher alerts.",
            "alert_type": "event",
            "alert_symbol": "A1",
            "alert_level": 1,
            "duration": 24
        },
        "event": {
            "event_id": 12394,
            "site": {
                "area_code": 53,
                "region": "VIII",
                "barangay": "Bolodbolod",
                "season": 1,
                "households": "No households at risk",
                "municipality": "St. Bernard",
                "site_code": "bol",
                "purok": "3 & 4",
                "latitude": 10.30199,
                "sitio": null,
                "province": "Southern Leyte",
                "site_id": 7,
                "longitude": 125.1279
            },
            "validity": "2022-03-31 16:00:00",
            "event_start": "2022-03-30 14:00:00",
            "site_id": 7,
            "status": "2"
        },
        "releases": [
            {
                "bulletin_number": 54,
                "release_time": "14:09:00",
                "release_id": 50405,
                "comments": "",
                "data_ts": "2022-03-30 14:00:00",
                "with_retrigger_validation": false,
                "trigger_list": "ND-D"
            }
        ],
        "internal_alert_level": "ND-D",
        "sent_statuses": {
            "is_sms_sent": false,
            "is_bulletin_sent": false,
            "sms": null,
            "bulletin": null
        },
        "is_onset_release": true,
        "prescribed_release_time": "2022-03-30 16:00:00",
        "latest_event_triggers": [
            {
                "internal_sym": {
                    "trigger_symbol": {
                        "trigger_sym_id": 16,
                        "alert_description": "monitoring requested by community",
                        "alert_symbol": "d1",
                        "alert_level": 1,
                        "trigger_hierarchy": {
                            "is_ground": 0,
                            "data_interval": "discrete",
                            "hierarchy_id": 6,
                            "is_active": 1,
                            "is_default": 1,
                            "data_presence": 2,
                            "source_id": 5,
                            "trigger_source": "on demand"
                        },
                        "source_id": 5
                    },
                    "trigger_sym_id": 16,
                    "alert_description": null,
                    "alert_symbol": "D",
                    "internal_sym_id": 12
                },
                "trigger_id": 13369,
                "info": "Rain gauges has no available data. Rainfall data is below threshold levels",
                "release_id": 50405,
                "trigger_misc": {
                    "moms_releases": [],
                    "has_moms": false,
                    "od_id": 74,
                    "on_demand": null,
                    "eq_id": null,
                    "trig_misc_id": 279,
                    "eq": null
                },
                "ts": "2022-03-30 14:09:00"
            }
        ],
        "highest_event_alert_level": 1
    },
    {
        "ts_start": "2022-03-30 14:00:00",
        "ts_end": null,
        "event_alert_id": 4193,
        "public_alert_symbol": {
            "pub_sym_id": 2,
            "recommended_response": "Prepare to respond to higher alerts.",
            "alert_type": "event",
            "alert_symbol": "A1",
            "alert_level": 1,
            "duration": 24
        },
        "event": {
            "event_id": 12393,
            "site": {
                "area_code": 38,
                "region": "VII",
                "barangay": "Banlasan",
                "season": 1,
                "households": "4 households (14 residents), Causwagan-Pawa Road",
                "municipality": "Calape",
                "site_code": "ban",
                "purok": "6",
                "latitude": 9.888559,
                "sitio": "Pangas",
                "province": "Bohol",
                "site_id": 3,
                "longitude": 123.9488
            },
            "validity": "2022-03-31 16:00:00",
            "event_start": "2022-03-30 14:00:00",
            "site_id": 3,
            "status": "2"
        },
        "releases": [
            {
                "bulletin_number": 21,
                "release_time": "14:01:00",
                "release_id": 50404,
                "comments": "c",
                "data_ts": "2022-03-30 14:00:00",
                "with_retrigger_validation": false,
                "trigger_list": "ND-D"
            }
        ],
        "internal_alert_level": "ND-D",
        "sent_statuses": {
            "is_sms_sent": false,
            "is_bulletin_sent": false,
            "sms": null,
            "bulletin": null
        },
        "is_onset_release": true,
        "prescribed_release_time": "2022-03-30 16:00:00",
        "latest_event_triggers": [
            {
                "internal_sym": {
                    "trigger_symbol": {
                        "trigger_sym_id": 16,
                        "alert_description": "monitoring requested by community",
                        "alert_symbol": "d1",
                        "alert_level": 1,
                        "trigger_hierarchy": {
                            "is_ground": 0,
                            "data_interval": "discrete",
                            "hierarchy_id": 6,
                            "is_active": 1,
                            "is_default": 1,
                            "data_presence": 2,
                            "source_id": 5,
                            "trigger_source": "on demand"
                        },
                        "source_id": 5
                    },
                    "trigger_sym_id": 16,
                    "alert_description": null,
                    "alert_symbol": "D",
                    "internal_sym_id": 12
                },
                "trigger_id": 13368,
                "info": "asd",
                "release_id": 50404,
                "trigger_misc": {
                    "moms_releases": [],
                    "has_moms": false,
                    "od_id": 73,
                    "on_demand": null,
                    "eq_id": null,
                    "trig_misc_id": 278,
                    "eq": null
                },
                "ts": "2022-03-30 14:01:16"
            }
        ],
        "highest_event_alert_level": 1
    },
    {
        "ts_start": "2022-03-29 15:00:00",
        "ts_end": null,
        "event_alert_id": 4192,
        "public_alert_symbol": {
            "pub_sym_id": 2,
            "recommended_response": "Prepare to respond to higher alerts.",
            "alert_type": "event",
            "alert_symbol": "A1",
            "alert_level": 1,
            "duration": 24
        },
        "event": {
            "event_id": 12392,
            "site": {
                "area_code": 36,
                "region": "VI",
                "barangay": "Agbatuan",
                "season": 1,
                "households": "15 households (52 residents), Agbatuan Elementary School",
                "municipality": "Dumarao",
                "site_code": "agb",
                "purok": null,
                "latitude": 11.28082,
                "sitio": null,
                "province": "Capiz",
                "site_id": 1,
                "longitude": 122.8313
            },
            "validity": "2022-03-30 16:00:00",
            "event_start": "2022-03-29 15:00:00",
            "site_id": 1,
            "status": "2"
        },
        "releases": [
            {
                "bulletin_number": 21,
                "release_time": "16:04:00",
                "release_id": 50403,
                "comments": "",
                "data_ts": "2022-03-29 15:00:00",
                "with_retrigger_validation": false,
                "trigger_list": "ND-D0"
            }
        ],
        "internal_alert_level": "ND-D0",
        "sent_statuses": {
            "is_sms_sent": false,
            "is_bulletin_sent": false,
            "sms": null,
            "bulletin": null
        },
        "is_onset_release": true,
        "prescribed_release_time": "2022-03-29 16:00:00",
        "latest_event_triggers": [
            {
                "internal_sym": {
                    "trigger_symbol": {
                        "trigger_sym_id": 16,
                        "alert_description": "monitoring requested by community",
                        "alert_symbol": "d1",
                        "alert_level": 1,
                        "trigger_hierarchy": {
                            "is_ground": 0,
                            "data_interval": "discrete",
                            "hierarchy_id": 6,
                            "is_active": 1,
                            "is_default": 1,
                            "data_presence": 2,
                            "source_id": 5,
                            "trigger_source": "on demand"
                        },
                        "source_id": 5
                    },
                    "trigger_sym_id": 16,
                    "alert_description": null,
                    "alert_symbol": "D",
                    "internal_sym_id": 12
                },
                "trigger_id": 13367,
                "info": "test",
                "release_id": 50403,
                "trigger_misc": {
                    "moms_releases": [],
                    "has_moms": false,
                    "od_id": 71,
                    "on_demand": null,
                    "eq_id": null,
                    "trig_misc_id": 277,
                    "eq": null
                },
                "ts": "2022-03-29 15:12:39"
            }
        ],
        "highest_event_alert_level": 1
    },
    {
        "ts_start": "2022-03-21 22:00:00",
        "ts_end": null,
        "event_alert_id": 4191,
        "public_alert_symbol": {
            "pub_sym_id": 2,
            "recommended_response": "Prepare to respond to higher alerts.",
            "alert_type": "event",
            "alert_symbol": "A1",
            "alert_level": 1,
            "duration": 24
        },
        "event": {
            "event_id": 12391,
            "site": {
                "area_code": 56,
                "region": "V",
                "barangay": "Pange",
                "season": 1,
                "households": "At least 8 households (51 residents)",
                "municipality": "Matnog",
                "site_code": "png",
                "purok": null,
                "latitude": 12.63063,
                "sitio": null,
                "province": "Sorsogon",
                "site_id": 41,
                "longitude": 124.0183
            },
            "validity": "2022-03-23 04:00:00",
            "event_start": "2022-03-21 22:00:00",
            "site_id": 41,
            "status": "2"
        },
        "releases": [
            {
                "bulletin_number": 107,
                "release_time": "03:50:00",
                "release_id": 50402,
                "comments": "",
                "data_ts": "2022-03-22 03:30:00",
                "with_retrigger_validation": false,
                "trigger_list": "R"
            },
            {
                "bulletin_number": 106,
                "release_time": "00:02:00",
                "release_id": 50401,
                "comments": "",
                "data_ts": "2022-03-21 23:30:00",
                "with_retrigger_validation": false,
                "trigger_list": "R"
            },
            {
                "bulletin_number": 105,
                "release_time": "23:18:00",
                "release_id": 50400,
                "comments": "",
                "data_ts": "2022-03-21 22:00:00",
                "with_retrigger_validation": false,
                "trigger_list": "R"
            }
        ],
        "internal_alert_level": "A1-R",
        "sent_statuses": {
            "is_sms_sent": false,
            "is_bulletin_sent": false,
            "sms": {
                "action": "send",
                "ts": "2022-03-22 04:00:01",
                "remarks": null
            },
            "bulletin": {
                "action": "send",
                "ts": "2022-03-22 04:00:14",
                "remarks": null
            }
        },
        "is_onset_release": false,
        "prescribed_release_time": "2022-03-22 04:00:00",
        "latest_event_triggers": [
            {
                "internal_sym": {
                    "trigger_symbol": {
                        "trigger_sym_id": 14,
                        "alert_description": "rainfall above threshold",
                        "alert_symbol": "r1",
                        "alert_level": 1,
                        "trigger_hierarchy": {
                            "is_ground": 0,
                            "data_interval": "continuous",
                            "hierarchy_id": 4,
                            "is_active": 1,
                            "is_default": 1,
                            "data_presence": 1,
                            "source_id": 3,
                            "trigger_source": "rainfall"
                        },
                        "source_id": 3
                    },
                    "trigger_sym_id": 14,
                    "alert_description": null,
                    "alert_symbol": "R",
                    "internal_sym_id": 8
                },
                "trigger_id": 13366,
                "info": "RAIN PNGTA (0.00 km away): 1-day cumulative rainfall (79.50 mm) exceeded threshold (68.19 mm)",
                "release_id": 50402,
                "trigger_misc": null,
                "ts": "2022-03-22 03:30:00"
            }
        ],
        "highest_event_alert_level": 1
    }
]

