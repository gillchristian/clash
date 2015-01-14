<?php
header('Access-Control-Allow-Origin: *');

echo "{\"spells\":
[
        {
            \"id\": \"05\",
            \"unit\": \"freeze\",
            \"name\": \"Freeze\",
            \"cost\": [26000,29000,31000,33000,35000],
            \"lvls\": [1,2,3,4,5],
            \"lvl\": \"\",
            \"time\": 2700,
            \"space\": 1,
            \"amount\": \"\"
        },
        {
            \"id\": \"02\",
            \"unit\": \"healing\",
            \"name\": \"Healing\",
            \"cost\": [15000,16500,18000,20000,22000,24000],
            \"lvls\": [1,2,3,4,5,6],
            \"lvl\": \"\",
            \"time\": 1800,
            \"space\": 1,
            \"amount\": \"\"
        },
        {
            \"id\": \"04\",
            \"unit\": \"jump\",
            \"name\": \"Jump\",
            \"cost\": [23000,27000,31000],
            \"lvls\": [1,2,3],
            \"lvl\": \"\",
            \"time\": 2700,
            \"space\": 1,
            \"amount\": \"\"
        },
        {
            \"id\": \"01\",
            \"unit\": \"lightning\",
            \"name\": \"Lightning\",
            \"cost\": [15000,16500,18000,20000,22000,24000],
            \"lvls\": [1,2,3,4,5,6],
            \"lvl\": \"\",
            \"time\": 1800,
            \"space\": 1,
            \"amount\": \"\"
        },
        {
            \"id\": \"03\",
            \"unit\": \"rage\",
            \"name\": \"Rage\",
            \"cost\": [23000,25000,27000,30000,33000],
            \"lvls\": [1,2,3,4,5],
            \"lvl\": \"\",
            \"time\": 2700,
            \"space\": 1,
            \"amount\": \"\"
        }]
}";
?>