class FormBuilderDefaults {

    static GENERAL_DEFAULT_SCHEMA = [
        {
            "type": "text",
            "required": false,
            "label": "Client Name",
            "placeholder": "Meddling P.I. LLC",
            "className": "form-control",
            "name": "clientName",
            "subtype": "text"
        },
        {
            "type": "text",
            "required": false,
            "label": "Investigation Type",
            "className": "form-control",
            "name": "investigationType",
            "subtype": "text"
        },
        {
            "type": "date",
            "required": false,
            "label": "Start Date",
            "className": "form-control",
            "name": "startDate"
        },
        {
            "type": "checkbox-group",
            "required": false,
            "label": "Case Status",
            "toggle": true,
            "name": "caseStatus",
            "values": [
                {
                    "label": "Open/Closed",
                    "value": "open",
                    "selected": true
                }
            ]
        },
        {
            "type": "text",
            "required": false,
            "label": "Tasking",
            "placeholder": "The objective of this case is to...",
            "className": "form-control",
            "name": "tasking",
            "subtype": "text"
        },
        {
            "type": "textarea",
            "required": false,
            "label": "Conclusions &amp; Recommendations",
            "className": "form-control",
            "name": "conclusions",
            "subtype": "textarea"
        }
    ];

    // TODO finish creating schema
    static SUBJECTS_DEFAULT_SCHEMA = [];

    // TODO finish creating schema
    static ADDRESSES_DEFAULT_SCHEMA = [];

    // TODO finish creating schema
    static VEHICLES_DEFAULT_SCHEMA = [];
}