(
  ( // brackets covering match for protocol (optional) and domain
    ([A-Za-z]{3,9}:(?:\/\/)?) // match protocol, allow in format http:// or mailto:
    (?:[\-;:&=\+\$,\w]+@)? // allow something@ for email addresses
    [A-Za-z0-9\.\-]+ // anything looking at all like a domain, non-unicode domains
    | // or instead of above
    (?:www\.|[\-;:&=\+\$,\w]+@) // starting with something@ or www.
    [A-Za-z0-9\.\-]+   // anything looking at all like a domain
  )
  ( // brackets covering match for path, query string and anchor
    (?:\/[\+~%\/\.\w\-]*) // allow optional /path
    ?\??(?:[\-\+=&;%@\.\w]*) // allow optional query string starting with ? 
    #?(?:[\.\!\/\\\w]*) // allow optional anchor #anchor
  )? // make URL suffix optional
)