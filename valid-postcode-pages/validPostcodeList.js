const postCodes = [
    "B1",
    "B1",
    "B1",
    "B1",
    "B10",
    "B10",
    "B10",
    "B10",
    "B11",
    "B11",
    "B11",
    "B11",
    "B12",
    "B12",
    "B12",
    "B12",
    "B13",
    "B13",
    "B13",
    "B13",
    "B14",
    "B14",
    "B14",
    "B14",
    "B15",
    "B15",
    "B15",
    "B15",
    "B16",
    "B16",
    "B16",
    "B16",
    "B17",
    "B17",
    "B17",
    "B17",
    "B18",
    "B18",
    "B18",
    "B18",
    "B19",
    "B19",
    "B19",
    "B19",
    "B2",
    "B2",
    "B2",
    "B2",
    "B20",
    "B20",
    "B20",
    "B20",
    "B21",
    "B21",
    "B21",
    "B21",
    "B22",
    "B22",
    "B22",
    "B22",
    "B23",
    "B23",
    "B23",
    "B23",
    "B24",
    "B24",
    "B24",
    "B24",
    "B25",
    "B25",
    "B25",
    "B25",
    "B26",
    "B26",
    "B26",
    "B26",
    "B27",
    "B27",
    "B27",
    "B27",
    "B28",
    "B28",
    "B28",
    "B28",
    "B29",
    "B29",
    "B29",
    "B29",
    "B3",
    "B3",
    "B3",
    "B3",
    "B30",
    "B30",
    "B30",
    "B30",
    "B31",
    "B31",
    "B31",
    "B31",
    "B32",
    "B32",
    "B32",
    "B32",
    "B33",
    "B33",
    "B33",
    "B33",
    "B34",
    "B34",
    "B34",
    "B34",
    "B35",
    "B35",
    "B35",
    "B35",
    "B36",
    "B36",
    "B36",
    "B36",
    "B37",
    "B37",
    "B37",
    "B37",
    "B38",
    "B38",
    "B38",
    "B38",
    "B39",
    "B39",
    "B39",
    "B39",
    "B4",
    "B4",
    "B4",
    "B4",
    "B40",
    "B40",
    "B40",
    "B40",
    "B41",
    "B41",
    "B41",
    "B41",
    "B42",
    "B42",
    "B42",
    "B42",
    "B43",
    "B43",
    "B43",
    "B43",
    "B44",
    "B44",
    "B44",
    "B44",
    "B45",
    "B45",
    "B45",
    "B45",
    "B46",
    "B46",
    "B46",
    "B46",
    "B47",
    "B47",
    "B47",
    "B47",
    "B48",
    "B48",
    "B48",
    "B48",
    "B49",
    "B49",
    "B49",
    "B49",
    "B5",
    "B5",
    "B5",
    "B5",
    "B50",
    "B50",
    "B50",
    "B50",
    "B51",
    "B51",
    "B51",
    "B51",
    "B52",
    "B52",
    "B52",
    "B52",
    "B53",
    "B53",
    "B53",
    "B53",
    "B54",
    "B54",
    "B54",
    "B54",
    "B55",
    "B55",
    "B55",
    "B55",
    "B56",
    "B56",
    "B56",
    "B56",
    "B57",
    "B57",
    "B57",
    "B57",
    "B58",
    "B58",
    "B58",
    "B58",
    "B59",
    "B59",
    "B59",
    "B59",
    "B6",
    "B6",
    "B6",
    "B6",
    "B60",
    "B60",
    "B60",
    "B60",
    "B63",
    "B63",
    "B63",
    "B63",
    "B64",
    "B64",
    "B64",
    "B64",
    "B65",
    "B65",
    "B65",
    "B65",
    "B66",
    "B67",
    "B68",
    "B69",
    "B7",
    "B7",
    "B7",
    "B7",
    "B70",
    "B71",
    "B72",
    "B72",
    "B72",
    "B72",
    "B73",
    "B73",
    "B73",
    "B73",
    "B74",
    "B74",
    "B74",
    "B74",
    "B75",
    "B75",
    "B75",
    "B75",
    "B76",
    "B76",
    "B76",
    "B76",
    "B77",
    "B77",
    "B77",
    "B77",
    "B78",
    "B78",
    "B78",
    "B78",
    "B79",
    "B79",
    "B79",
    "B79",
    "B8",
    "B8",
    "B8",
    "B8",
    "B80",
    "B80",
    "B80",
    "B80",
    "B81",
    "B81",
    "B81",
    "B81",
    "B82",
    "B82",
    "B82",
    "B82",
    "B83",
    "B83",
    "B83",
    "B83",
    "B84",
    "B84",
    "B84",
    "B84",
    "B85",
    "B85",
    "B85",
    "B85",
    "B86",
    "B86",
    "B86",
    "B86",
    "B87",
    "B87",
    "B87",
    "B87",
    "B88",
    "B88",
    "B88",
    "B88",
    "B89",
    "B89",
    "B89",
    "B89",
    "B9",
    "B9",
    "B9",
    "B9",
    "B90",
    "B90",
    "B90",
    "B90",
    "B91",
    "B91",
    "B91",
    "B91",
    "B92",
    "B92",
    "B92",
    "B92",
    "B93",
    "B93",
    "B93",
    "B93",
    "B94",
    "B94",
    "B94",
    "B94",
    "B95",
    "B95",
    "B95",
    "B95",
    "B96",
    "B96",
    "B96",
    "B96",
    "B97",
    "B97",
    "B97",
    "B97",
    "B98",
    "B98",
    "B98",
    "B98",
    "DY4",
    "DY5",
    "DY7",
    "DY8",
    "PE11",
    "PE11",
    "PE11",
    "PE11",
    "PE12",
    "PE12",
    "PE12",
    "PE12",
    "PE20",
    "PE20",
    "PE20",
    "PE20",
    "PE21",
    "PE21",
    "PE21",
    "PE21",
    "PE22",
    "PE22",
    "PE22",
    "PE22",
    "PE23",
    "PE23",
    "PE23",
    "PE23",
    "PE24",
    "PE24",
    "PE24",
    "PE24",
    "PE25",
    "PE25",
    "PE25",
    "PE25",
    "DE4",
    "DE4",
    "DE4",
    "DE4",
    "DE45",
    "DE45",
    "DE45",
    "DE45",
    "DE55",
    "DE55",
    "DE55",
    "DE55",
    "DN10",
    "DN10",
    "DN10",
    "DN10",
    "NG17",
    "NG17",
    "NG17",
    "NG17",
    "NG18",
    "NG18",
    "NG18",
    "NG18",
    "NG19",
    "NG19",
    "NG19",
    "NG19",
    "NG20",
    "NG20",
    "NG20",
    "NG20",
    "S17",
    "S17",
    "S17",
    "S17",
    "S18",
    "S18",
    "S18",
    "S18",
    "S21",
    "S21",
    "S21",
    "S21",
    "S32",
    "S32",
    "S32",
    "S32",
    "S33",
    "S33",
    "S33",
    "S33",
    "S40",
    "S40",
    "S40",
    "S40",
    "S41",
    "S41",
    "S41",
    "S41",
    "S42",
    "S42",
    "S42",
    "S42",
    "S43",
    "S43",
    "S43",
    "S43",
    "S44",
    "S44",
    "S44",
    "S44",
    "S45",
    "S45",
    "S45",
    "S45",
    "S80",
    "S80",
    "S80",
    "S80",
    "S81",
    "S81",
    "S81",
    "S81",
    "CV1",
    "CV1",
    "CV1",
    "CV1",
    "CV12",
    "CV12",
    "CV12",
    "CV12",
    "CV2",
    "CV2",
    "CV2",
    "CV2",
    "CV21",
    "CV21",
    "CV21",
    "CV21",
    "CV22",
    "CV22",
    "CV22",
    "CV22",
    "CV23",
    "CV23",
    "CV23",
    "CV23",
    "CV3",
    "CV3",
    "CV3",
    "CV3",
    "CV31",
    "CV31",
    "CV31",
    "CV31",
    "CV32",
    "CV32",
    "CV32",
    "CV32",
    "CV33",
    "CV33",
    "CV33",
    "CV33",
    "CV34",
    "CV34",
    "CV34",
    "CV34",
    "CV35",
    "CV35",
    "CV35",
    "CV35",
    "CV36",
    "CV36",
    "CV36",
    "CV36",
    "CV37",
    "CV37",
    "CV37",
    "CV37",
    "CV38",
    "CV38",
    "CV38",
    "CV38",
    "CV39",
    "CV39",
    "CV39",
    "CV39",
    "CV4",
    "CV4",
    "CV4",
    "CV4",
    "CV40",
    "CV40",
    "CV40",
    "CV40",
    "CV41",
    "CV41",
    "CV41",
    "CV41",
    "CV42",
    "CV42",
    "CV42",
    "CV42",
    "CV43",
    "CV43",
    "CV43",
    "CV43",
    "CV44",
    "CV44",
    "CV44",
    "CV44",
    "CV45",
    "CV45",
    "CV45",
    "CV45",
    "CV46",
    "CV46",
    "CV46",
    "CV46",
    "CV47",
    "CV47",
    "CV47",
    "CV47",
    "CV5",
    "CV5",
    "CV5",
    "CV5",
    "CV6",
    "CV6",
    "CV6",
    "CV6",
    "CV7",
    "CV7",
    "CV7",
    "CV7",
    "CV8",
    "CV8",
    "CV8",
    "CV8",
    "DE1",
    "DE1",
    "DE1",
    "DE1",
    "DE10",
    "DE10",
    "DE10",
    "DE10",
    "DE11",
    "DE11",
    "DE11",
    "DE11",
    "DE12",
    "DE12",
    "DE12",
    "DE12",
    "DE13",
    "DE13",
    "DE13",
    "DE13",
    "DE14",
    "DE14",
    "DE14",
    "DE14",
    "DE15",
    "DE15",
    "DE15",
    "DE15",
    "DE16",
    "DE16",
    "DE16",
    "DE16",
    "DE17",
    "DE17",
    "DE17",
    "DE17",
    "DE18",
    "DE18",
    "DE18",
    "DE18",
    "DE19",
    "DE19",
    "DE19",
    "DE19",
    "DE2",
    "DE2",
    "DE2",
    "DE2",
    "DE20",
    "DE20",
    "DE20",
    "DE20",
    "DE21",
    "DE21",
    "DE21",
    "DE21",
    "DE22",
    "DE22",
    "DE22",
    "DE22",
    "DE23",
    "DE23",
    "DE23",
    "DE23",
    "DE24",
    "DE24",
    "DE24",
    "DE24",
    "DE3",
    "DE3",
    "DE3",
    "DE3",
    "DE5",
    "DE5",
    "DE5",
    "DE5",
    "DE56",
    "DE56",
    "DE56",
    "DE56",
    "DE57",
    "DE57",
    "DE57",
    "DE57",
    "DE58",
    "DE58",
    "DE58",
    "DE58",
    "DE59",
    "DE59",
    "DE59",
    "DE59",
    "DE6",
    "DE6",
    "DE6",
    "DE6",
    "DE60",
    "DE60",
    "DE60",
    "DE60",
    "DE61",
    "DE61",
    "DE61",
    "DE61",
    "DE62",
    "DE62",
    "DE62",
    "DE62",
    "DE63",
    "DE63",
    "DE63",
    "DE63",
    "DE64",
    "DE64",
    "DE64",
    "DE64",
    "DE65",
    "DE65",
    "DE65",
    "DE65",
    "DE66",
    "DE66",
    "DE66",
    "DE66",
    "DE67",
    "DE67",
    "DE67",
    "DE67",
    "DE68",
    "DE68",
    "DE68",
    "DE68",
    "DE69",
    "DE69",
    "DE69",
    "DE69",
    "DE7",
    "DE7",
    "DE7",
    "DE7",
    "DE70",
    "DE70",
    "DE70",
    "DE70",
    "DE71",
    "DE71",
    "DE71",
    "DE71",
    "DE72",
    "DE72",
    "DE72",
    "DE72",
    "DE73",
    "DE73",
    "DE73",
    "DE73",
    "DE74",
    "DE74",
    "DE74",
    "DE74",
    "DE75",
    "DE75",
    "DE75",
    "DE75",
    "DE8",
    "DE8",
    "DE8",
    "DE8",
    "DE9",
    "DE9",
    "DE9",
    "ST14",
    "ST14",
    "ST14",
    "ST14",
    "HR1",
    "HR1",
    "HR1",
    "HR1",
    "HR2",
    "HR2",
    "HR2",
    "HR2",
    "HR3",
    "HR3",
    "HR3",
    "HR3",
    "HR4",
    "HR4",
    "HR4",
    "HR4",
    "HR5",
    "HR5",
    "HR5",
    "HR5",
    "HR6",
    "HR6",
    "HR6",
    "HR6",
    "HR7",
    "HR7",
    "HR7",
    "HR7",
    "HR8",
    "HR8",
    "HR8",
    "HR8",
    "HR9",
    "HR9",
    "HR9",
    "B61",
    "B61",
    "B61",
    "B61",
    "B62",
    "B62",
    "B62",
    "B62",
    "DY10",
    "DY10",
    "DY10",
    "DY10",
    "DY11",
    "DY11",
    "DY11",
    "DY11",
    "DY13",
    "DY13",
    "DY13",
    "DY13",
    "DY14",
    "DY14",
    "DY14",
    "DY14",
    "DY9",
    "DY9",
    "DY9",
    "DY9",
    "WR1",
    "WR2",
    "WR3",
    "WR4",
    "WR5",
    "WR6",
    "WR7",
    "WR8",
    "WR10",
    "WR11",
    "WR12",
    "WR13",
    "WR14",
    "WR15",
    "WR15",
    "WR15",
    "WR15",
    "WR9",
    "WR9",
    "WR9",
    "WR9",
    "LE1",
    "LE1",
    "LE1",
    "LE1",
    "LE11",
    "LE11",
    "LE11",
    "LE11",
    "LE12",
    "LE12",
    "LE12",
    "LE12",
    "LE13",
    "LE13",
    "LE13",
    "LE13",
    "LE14",
    "LE14",
    "LE14",
    "LE14",
    "LE15",
    "LE15",
    "LE15",
    "LE15",
    "LE16",
    "LE16",
    "LE16",
    "LE16",
    "LE17",
    "LE17",
    "LE17",
    "LE17",
    "LE18",
    "LE18",
    "LE18",
    "LE18",
    "LE19",
    "LE19",
    "LE19",
    "LE19",
    "LE2",
    "LE2",
    "LE2",
    "LE2",
    "LE20",
    "LE20",
    "LE20",
    "LE20",
    "LE21",
    "LE21",
    "LE21",
    "LE21",
    "LE22",
    "LE22",
    "LE22",
    "LE22",
    "LE23",
    "LE23",
    "LE23",
    "LE23",
    "LE24",
    "LE24",
    "LE24",
    "LE24",
    "LE25",
    "LE25",
    "LE25",
    "LE25",
    "LE26",
    "LE26",
    "LE26",
    "LE26",
    "LE27",
    "LE27",
    "LE27",
    "LE27",
    "LE28",
    "LE28",
    "LE28",
    "LE28",
    "LE29",
    "LE29",
    "LE29",
    "LE29",
    "LE3",
    "LE3",
    "LE3",
    "LE3",
    "LE30",
    "LE30",
    "LE30",
    "LE30",
    "LE31",
    "LE31",
    "LE31",
    "LE31",
    "LE32",
    "LE32",
    "LE32",
    "LE32",
    "LE33",
    "LE33",
    "LE33",
    "LE33",
    "LE34",
    "LE34",
    "LE34",
    "LE34",
    "LE35",
    "LE35",
    "LE35",
    "LE35",
    "LE36",
    "LE36",
    "LE36",
    "LE36",
    "LE37",
    "LE37",
    "LE37",
    "LE37",
    "LE38",
    "LE38",
    "LE38",
    "LE38",
    "LE39",
    "LE39",
    "LE39",
    "LE39",
    "LE4",
    "LE4",
    "LE4",
    "LE4",
    "LE40",
    "LE40",
    "LE40",
    "LE40",
    "LE41",
    "LE41",
    "LE41",
    "LE41",
    "LE42",
    "LE42",
    "LE42",
    "LE42",
    "LE43",
    "LE43",
    "LE43",
    "LE43",
    "LE44",
    "LE44",
    "LE44",
    "LE44",
    "LE45",
    "LE45",
    "LE45",
    "LE45",
    "LE46",
    "LE46",
    "LE46",
    "LE46",
    "LE47",
    "LE47",
    "LE47",
    "LE47",
    "LE48",
    "LE48",
    "LE48",
    "LE48",
    "LE49",
    "LE49",
    "LE49",
    "LE49",
    "LE5",
    "LE5",
    "LE5",
    "LE5",
    "LE50",
    "LE50",
    "LE50",
    "LE50",
    "LE51",
    "LE51",
    "LE51",
    "LE51",
    "LE52",
    "LE52",
    "LE52",
    "LE52",
    "LE53",
    "LE53",
    "LE53",
    "LE53",
    "LE54",
    "LE54",
    "LE54",
    "LE54",
    "LE55",
    "LE55",
    "LE55",
    "LE55",
    "LE56",
    "LE56",
    "LE56",
    "LE56",
    "LE57",
    "LE57",
    "LE57",
    "LE57",
    "LE58",
    "LE58",
    "LE58",
    "LE58",
    "LE59",
    "LE59",
    "LE59",
    "LE59",
    "LE6",
    "LE6",
    "LE6",
    "LE6",
    "LE60",
    "LE60",
    "LE60",
    "LE60",
    "LE61",
    "LE61",
    "LE61",
    "LE61",
    "LE62",
    "LE62",
    "LE62",
    "LE62",
    "LE63",
    "LE63",
    "LE63",
    "LE63",
    "LE64",
    "LE64",
    "LE64",
    "LE64",
    "LE65",
    "LE65",
    "LE65",
    "LE65",
    "LE66",
    "LE66",
    "LE66",
    "LE66",
    "LE67",
    "LE67",
    "LE67",
    "LE67",
    "LE7",
    "LE7",
    "LE7",
    "LE7",
    "LE8",
    "LE8",
    "LE8",
    "LE8",
    "LE9",
    "LE9",
    "LE9",
    "LE9",
    "DN21",
    "DN21",
    "DN21",
    "DN21",
    "DN22",
    "DN22",
    "DN22",
    "DN22",
    "LN1",
    "LN1",
    "LN1",
    "LN1",
    "LN10",
    "LN10",
    "LN10",
    "LN10",
    "LN13",
    "LN13",
    "LN13",
    "LN13",
    "LN2",
    "LN2",
    "LN2",
    "LN2",
    "LN3",
    "LN3",
    "LN3",
    "LN3",
    "LN4",
    "LN4",
    "LN4",
    "LN4",
    "LN5",
    "LN5",
    "LN5",
    "LN5",
    "LN6",
    "LN6",
    "LN6",
    "LN6",
    "LN9",
    "LN9",
    "LN9",
    "LN9",
    "NG23",
    "NG23",
    "NG23",
    "NG23",
    "NG24",
    "NG24",
    "NG24",
    "NG24",
    "NG31",
    "NG31",
    "NG31",
    "NG31",
    "NG32",
    "NG32",
    "NG32",
    "NG32",
    "NG33",
    "NG33",
    "NG33",
    "NG33",
    "NG34",
    "NG34",
    "NG34",
    "NG34",
    "NN1",
    "NN1",
    "NN1",
    "NN1",
    "NN10",
    "NN10",
    "NN10",
    "NN10",
    "NN11",
    "NN11",
    "NN11",
    "NN11",
    "NN12",
    "NN12",
    "NN12",
    "NN12",
    "NN13",
    "NN13",
    "NN13",
    "NN13",
    "NN19",
    "NN19",
    "NN19",
    "NN19",
    "NN2",
    "NN2",
    "NN2",
    "NN2",
    "NN20",
    "NN20",
    "NN20",
    "NN20",
    "NN21",
    "NN21",
    "NN21",
    "NN21",
    "NN22",
    "NN22",
    "NN22",
    "NN22",
    "NN23",
    "NN23",
    "NN23",
    "NN23",
    "NN24",
    "NN24",
    "NN24",
    "NN24",
    "NN25",
    "NN25",
    "NN25",
    "NN25",
    "NN26",
    "NN26",
    "NN26",
    "NN26",
    "NN27",
    "NN27",
    "NN27",
    "NN27",
    "NN28",
    "NN28",
    "NN28",
    "NN28",
    "NN29",
    "NN29",
    "NN29",
    "NN29",
    "NN3",
    "NN3",
    "NN3",
    "NN3",
    "NN30",
    "NN30",
    "NN30",
    "NN30",
    "NN31",
    "NN31",
    "NN31",
    "NN31",
    "NN32",
    "NN32",
    "NN32",
    "NN32",
    "NN33",
    "NN33",
    "NN33",
    "NN33",
    "NN34",
    "NN34",
    "NN34",
    "NN34",
    "NN35",
    "NN35",
    "NN35",
    "NN35",
    "NN36",
    "NN36",
    "NN36",
    "NN36",
    "NN37",
    "NN37",
    "NN37",
    "NN37",
    "NN38",
    "NN38",
    "NN38",
    "NN38",
    "NN39",
    "NN39",
    "NN39",
    "NN39",
    "NN4",
    "NN4",
    "NN4",
    "NN4",
    "NN40",
    "NN40",
    "NN40",
    "NN40",
    "NN41",
    "NN41",
    "NN41",
    "NN41",
    "NN42",
    "NN42",
    "NN42",
    "NN42",
    "NN43",
    "NN43",
    "NN43",
    "NN43",
    "NN44",
    "NN44",
    "NN44",
    "NN44",
    "NN45",
    "NN45",
    "NN45",
    "NN45",
    "NN46",
    "NN46",
    "NN46",
    "NN46",
    "NN47",
    "NN47",
    "NN47",
    "NN47",
    "NN48",
    "NN48",
    "NN48",
    "NN48",
    "NN49",
    "NN49",
    "NN49",
    "NN49",
    "NN5",
    "NN5",
    "NN5",
    "NN5",
    "NN50",
    "NN50",
    "NN50",
    "NN50",
    "NN51",
    "NN51",
    "NN51",
    "NN51",
    "NN52",
    "NN52",
    "NN52",
    "NN52",
    "NN53",
    "NN53",
    "NN53",
    "NN53",
    "NN54",
    "NN54",
    "NN54",
    "NN54",
    "NN55",
    "NN55",
    "NN55",
    "NN55",
    "NN56",
    "NN56",
    "NN56",
    "NN56",
    "NN57",
    "NN57",
    "NN57",
    "NN57",
    "NN58",
    "NN58",
    "NN58",
    "NN58",
    "NN59",
    "NN59",
    "NN59",
    "NN59",
    "NN6",
    "NN6",
    "NN6",
    "NN6",
    "NN60",
    "NN60",
    "NN60",
    "NN60",
    "NN61",
    "NN61",
    "NN61",
    "NN61",
    "NN62",
    "NN62",
    "NN62",
    "NN62",
    "NN63",
    "NN63",
    "NN63",
    "NN63",
    "NN64",
    "NN64",
    "NN64",
    "NN64",
    "NN65",
    "NN65",
    "NN65",
    "NN65",
    "NN66",
    "NN66",
    "NN66",
    "NN66",
    "NN67",
    "NN67",
    "NN67",
    "NN67",
    "NN68",
    "NN68",
    "NN68",
    "NN68",
    "NN69",
    "NN69",
    "NN69",
    "NN69",
    "NN7",
    "NN7",
    "NN7",
    "NN7",
    "NN70",
    "NN70",
    "NN70",
    "NN70",
    "NN71",
    "NN71",
    "NN71",
    "NN71",
    "NN72",
    "NN72",
    "NN72",
    "NN72",
    "NN73",
    "NN73",
    "NN73",
    "NN73",
    "NN74",
    "NN74",
    "NN74",
    "NN74",
    "NN75",
    "NN75",
    "NN75",
    "NN75",
    "NN76",
    "NN76",
    "NN76",
    "NN76",
    "NN77",
    "NN77",
    "NN77",
    "NN77",
    "NN78",
    "NN78",
    "NN78",
    "NN78",
    "NN79",
    "NN79",
    "NN79",
    "NN79",
    "NN8",
    "NN8",
    "NN8",
    "NN8",
    "NN80",
    "NN80",
    "NN80",
    "NN80",
    "NN81",
    "NN81",
    "NN81",
    "NN81",
    "NN82",
    "NN82",
    "NN82",
    "NN82",
    "NN83",
    "NN83",
    "NN83",
    "NN83",
    "NN84",
    "NN84",
    "NN84",
    "NN84",
    "NN85",
    "NN85",
    "NN85",
    "NN85",
    "NN86",
    "NN86",
    "NN86",
    "NN86",
    "NN87",
    "NN87",
    "NN87",
    "NN87",
    "NN88",
    "NN88",
    "NN88",
    "NN88",
    "NN89",
    "NN89",
    "NN89",
    "NN89",
    "NN9",
    "NN9",
    "NN9",
    "NN9",
    "NN90",
    "NN90",
    "NN90",
    "NN90",
    "NN91",
    "NN91",
    "NN91",
    "NN91",
    "NN92",
    "NN92",
    "NN92",
    "NN92",
    "NN93",
    "NN93",
    "NN93",
    "NN93",
    "NG1",
    "NG1",
    "NG1",
    "NG1",
    "NG10",
    "NG10",
    "NG10",
    "NG10",
    "NG11",
    "NG11",
    "NG11",
    "NG11",
    "NG12",
    "NG12",
    "NG12",
    "NG12",
    "NG13",
    "NG13",
    "NG13",
    "NG13",
    "NG14",
    "NG14",
    "NG14",
    "NG14",
    "NG15",
    "NG15",
    "NG15",
    "NG15",
    "NG16",
    "NG16",
    "NG16",
    "NG16",
    "NG2",
    "NG2",
    "NG2",
    "NG2",
    "NG21",
    "NG21",
    "NG21",
    "NG21",
    "NG22",
    "NG22",
    "NG22",
    "NG22",
    "NG25",
    "NG25",
    "NG25",
    "NG25",
    "NG26",
    "NG26",
    "NG26",
    "NG26",
    "NG27",
    "NG27",
    "NG27",
    "NG27",
    "NG28",
    "NG28",
    "NG28",
    "NG28",
    "NG29",
    "NG29",
    "NG29",
    "NG29",
    "NG3",
    "NG3",
    "NG3",
    "NG3",
    "NG30",
    "NG30",
    "NG30",
    "NG30",
    "NG4",
    "NG4",
    "NG4",
    "NG4",
    "NG5",
    "NG5",
    "NG5",
    "NG5",
    "NG6",
    "NG6",
    "NG6",
    "NG6",
    "NG7",
    "NG7",
    "NG7",
    "NG7",
    "NG8",
    "NG8",
    "NG8",
    "NG8",
    "NG9",
    "NG9",
    "NG9",
    "NG9",
    "CV10",
    "CV10",
    "CV10",
    "CV10",
    "CV11",
    "CV11",
    "CV11",
    "CV11",
    "CV13",
    "CV13",
    "CV13",
    "CV13",
    "CV9",
    "CV9",
    "CV9",
    "CV9",
    "LE10",
    "LE10",
    "LE10",
    "LE10",
    "ST1",
    "ST1",
    "ST1",
    "ST1",
    "ST10",
    "ST10",
    "ST10",
    "ST10",
    "ST11",
    "ST11",
    "ST11",
    "ST11",
    "ST12",
    "ST12",
    "ST12",
    "ST12",
    "ST13",
    "ST13",
    "ST13",
    "ST13",
    "ST15",
    "ST15",
    "ST15",
    "ST15",
    "ST16",
    "ST16",
    "ST16",
    "ST16",
    "ST17",
    "ST17",
    "ST17",
    "ST17",
    "ST18",
    "ST18",
    "ST18",
    "ST18",
    "ST19",
    "ST19",
    "ST19",
    "ST19",
    "ST2",
    "ST2",
    "ST2",
    "ST2",
    "ST20",
    "ST20",
    "ST20",
    "ST20",
    "ST21",
    "ST21",
    "ST21",
    "ST21",
    "ST3",
    "ST3",
    "ST3",
    "ST3",
    "ST4",
    "ST4",
    "ST4",
    "ST4",
    "ST5",
    "ST5",
    "ST5",
    "ST5",
    "ST6",
    "ST6",
    "ST6",
    "ST6",
    "ST7",
    "ST7",
    "ST7",
    "ST7",
    "ST8",
    "ST8",
    "ST8",
    "ST8",
    "ST9",
    "ST9",
    "ST9",
    "ST9",
    "SY1",
    "SY1",
    "SY1",
    "SY1",
    "SY10",
    "SY10",
    "SY10",
    "SY10",
    "SY11",
    "SY11",
    "SY11",
    "SY11",
    "SY12",
    "SY12",
    "SY12",
    "SY12",
    "SY13",
    "SY13",
    "SY13",
    "SY13",
    "SY2",
    "SY2",
    "SY2",
    "SY2",
    "SY3",
    "SY3",
    "SY3",
    "SY3",
    "SY4",
    "SY4",
    "SY4",
    "SY4",
    "SY5",
    "SY5",
    "SY5",
    "SY5",
    "SY6",
    "SY6",
    "SY6",
    "SY6",
    "SY7",
    "SY7",
    "SY7",
    "SY7",
    "SY8",
    "SY8",
    "SY8",
    "SY8",
    "SY9",
    "SY9",
    "SY9",
    "SY9",
    "TF1",
    "TF1",
    "TF1",
    "TF1",
    "TF10",
    "TF10",
    "TF10",
    "TF10",
    "TF11",
    "TF11",
    "TF11",
    "TF11",
    "TF12",
    "TF12",
    "TF12",
    "TF12",
    "TF13",
    "TF13",
    "TF13",
    "TF13",
    "TF2",
    "TF2",
    "TF2",
    "TF2",
    "TF3",
    "TF3",
    "TF3",
    "TF3",
    "TF4",
    "TF4",
    "TF4",
    "TF4",
    "TF5",
    "TF5",
    "TF5",
    "TF5",
    "TF6",
    "TF6",
    "TF6",
    "TF6",
    "TF7",
    "TF7",
    "TF7",
    "TF7",
    "TF8",
    "TF8",
    "TF8",
    "TF8",
    "TF9",
    "TF9",
    "TF9",
    "TF9",
    "WV16",
    "WV16",
    "WV16",
    "WV16",
    "WS1",
    "WS1",
    "WS1",
    "WS1",
    "WS10",
    "WS10",
    "WS10",
    "WS10",
    "WS11",
    "WS11",
    "WS11",
    "WS11",
    "WS12",
    "WS12",
    "WS12",
    "WS12",
    "WS13",
    "WS13",
    "WS13",
    "WS13",
    "WS14",
    "WS14",
    "WS14",
    "WS14",
    "WS15",
    "WS15",
    "WS15",
    "WS15",
    "WS2",
    "WS2",
    "WS2",
    "WS2",
    "WS3",
    "WS3",
    "WS3",
    "WS3",
    "WS4",
    "WS4",
    "WS4",
    "WS4",
    "WS5",
    "WS5",
    "WS5",
    "WS5",
    "WS6",
    "WS6",
    "WS6",
    "WS6",
    "WS7",
    "WS7",
    "WS7",
    "WS7",
    "WS8",
    "WS8",
    "WS8",
    "WS8",
    "WS9",
    "WS9",
    "WS9",
    "WS9",
    "WV12",
    "WV12",
    "WV12",
    "WV12",
    "WV13",
    "WV13",
    "WV13",
    "WV13",
    "NN14",
    "NN14",
    "NN14",
    "NN14",
    "NN15",
    "NN15",
    "NN15",
    "NN15",
    "NN16",
    "NN16",
    "NN16",
    "NN16",
    "NN17",
    "NN17",
    "NN17",
    "NN17",
    "NN18",
    "NN18",
    "NN18",
    "NN18",
    "B66",
    "B66",
    "B66",
    "B67",
    "B67",
    "B67",
    "B68",
    "B68",
    "B68",
    "B69",
    "B69",
    "B69",
    "B70",
    "B70",
    "B70",
    "B71",
    "B71",
    "B71",
    "DY1",
    "DY1",
    "DY1",
    "DY1",
    "DY2",
    "DY2",
    "DY2",
    "DY2",
    "DY3",
    "DY3",
    "DY3",
    "DY3",
    "DY4",
    "DY4",
    "DY4",
    "DY5",
    "DY5",
    "DY5",
    "DY6",
    "DY6",
    "DY6",
    "DY6",
    "DY7",
    "DY7",
    "DY7",
    "DY8",
    "DY8",
    "DY8",
    "WV1",
    "WV1",
    "WV1",
    "WV1",
    "WV10",
    "WV10",
    "WV10",
    "WV10",
    "WV11",
    "WV11",
    "WV11",
    "WV11",
    "WV14",
    "WV14",
    "WV14",
    "WV14",
    "WV15",
    "WV15",
    "WV15",
    "WV15",
    "WV2",
    "WV2",
    "WV2",
    "WV2",
    "WV3",
    "WV3",
    "WV3",
    "WV3",
    "WV4",
    "WV4",
    "WV4",
    "WV4",
    "WV5",
    "WV5",
    "WV5",
    "WV5",
    "WV6",
    "WV6",
    "WV6",
    "WV6",
    "WV7",
    "WV7",
    "WV7",
    "WV7",
    "WV8",
    "WV8",
    "WV8",
    "WV8",
    "WV9",
    "WV9",
    "WV9",
    "WV9"
];

module.exports = postCodes;
