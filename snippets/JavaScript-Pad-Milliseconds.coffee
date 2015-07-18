# JavaScript-Pad-Milliseconds

padMs = (num)->

    if num < 10 then '00' + String(num) else if num < 100 then '0' + String(num) else String(num)

