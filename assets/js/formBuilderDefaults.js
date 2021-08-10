class FormBuilderDefaults {

    static GENERAL_DEFAULT_SCHEMA = [
        {
            "type": "text",
            "required": false,
            "label": "Client Name",
            "placeholder": "Meddling P.I. LLC",
            "className": "form-control",
            "name": "clientName"
        },
        {
            "type": "text",
            "required": false,
            "label": "Investigation Type",
            "className": "form-control",
            "name": "investigationType"
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
            "name": "tasking"
        },
        {
            "type": "textarea",
            "required": false,
            "label": "Conclusions &amp; Recommendations",
            "className": "form-control",
            "name": "conclusions"
        }
    ];

    static SUBJECTS_DEFAULT_SCHEMA = [
        {
            "type" : "text",
            "required" : false,
            "label" : "Name",
            "placeholder" : "John Doe",
            "className" : "form-control",
            "name" : "name"
        },
        {
            "type" : "text",
            "required" : false,
            "label" : "Description",
            "placeholder" : "Subject 1",
            "className" : "form-control",
            "name" : "description"
        },
        {
            "type" : "textarea",
            "required" : false,
            "label" : "Notes",
            "placeholder" : "Additional notes go here...",
            "className" : "form-control",
            "name" : "notes"
        }
    ];

    static ADDRESSES_DEFAULT_SCHEMA = [
        {
            "type" : "text",
            "required" : false,
            "label" : "Address",
            "placeholder" : "123 Main St., Plainfield, VT, 05301",
            "className" : "form-control",
            "name" : "address"
        },
        {
            "type" : "text",
            "required" : false,
            "label" : "Description",
            "placeholder" : "Home of Subject",
            "className" : "form-control",
            "name" : "description"
        },
        {
            "type" : "textarea",
            "required" : false,
            "label" : "Notes",
            "placeholder" : "Additional notes go here...",
            "className" : "form-control",
            "name" : "notes"
        }
    ];

    // TODO finish creating schema
    static VEHICLES_DEFAULT_SCHEMA = [];
}