sequenceDiagram

    Note right of browser: pressing Save runs javascript that updates the contents of the page before even sending the data to the server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server-->>browser: responds with 201 created
