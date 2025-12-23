sequenceDiagram

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note
    server-->>browser: redirect to location /notes

    Note right of browser: start the sequence that happens when fetching /notes
