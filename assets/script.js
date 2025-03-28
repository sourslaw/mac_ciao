const j_obj = [
  {
    "@context": "http://iiif.io/api/presentation/2/context.json",
    "@type": "sc:Manifest",
    "@id": "https://cdm16022.contentdm.oclc.org/iiif/p16022coll349:13303/manifest.json",
    "label": "Spitz, dog",
    "metadata": [
      {
        "label": "Parent Collection Name",
        "value": "Bell Museum of Natural History Records (ua-00876); http://purl.umn.edu/41476"
      },
      {
        "label": "Additional Notes",
        "value": "Forms part of the Exploring Minnesota's Natural History digitization project."
      },
      {
        "label": "Alternative Title",
        "value": "4781"
      }
    ],
    "within": "https://cdm16022.contentdm.oclc.org/iiif/p16022coll349/manifest.json",
    "sequences": [
      {
        "@id": "https://cdm16022.contentdm.oclc.org/iiif/p16022coll349:13303/sequence/s0",
        "@type": "sc:Sequence",
        "label": "Spitz, dog",
        "canvases": [
          {
            "@id": "https://cdm16022.contentdm.oclc.org/iiif/p16022coll349:13301/canvas/c0",
            "@type": "sc:Canvas",
            "label": "Negative",
            "images": [
              {
                "@id": "https://cdm16022.contentdm.oclc.org/iiif/p16022coll349:13301/annotation/a0",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "resource": {
                  "@id": "https://cdm16022.contentdm.oclc.org/iiif/2/p16022coll349:13301/full/full/0/default.jpg",
                  "@type": "dctypes:Image",
                  "service": {
                    "@context": "http://iiif.io/api/image/2/context.json",
                    "@id": "https://cdm16022.contentdm.oclc.org/iiif/2/p16022coll349:13301",
                    "width": 5661,
                    "height": 4314,
                    "tiles": [
                      {
                        "width": 5661,
                        "scaleFactors": [1, 2, 4, 8, 16]
                      }
                    ],
                    "profile": "http://iiif.io/api/image/2/level1.json",
                    "protocol": "http://iiif.io/api/image"
                  },
                  "format": "image/jpeg",
                  "width": 5661,
                  "height": 4314
                },
                "on": "https://cdm16022.contentdm.oclc.org/iiif/p16022coll349:13301/canvas/c0"
              }
            ],
            "width": 5661,
            "height": 4314
          },
          {
            "@id": "https://cdm16022.contentdm.oclc.org/iiif/p16022coll349:13302/canvas/c1",
            "@type": "sc:Canvas",
            "label": "Envelope",
            "images": [
              {
                "@id": "https://cdm16022.contentdm.oclc.org/iiif/p16022coll349:13302/annotation/a1",
                "@type": "oa:Annotation",
                "motivation": "sc:painting",
                "resource": {
                  "@id": "https://cdm16022.contentdm.oclc.org/iiif/2/p16022coll349:13302/full/full/0/default.jpg",
                  "@type": "dctypes:Image",
                  "service": {
                    "@context": "http://iiif.io/api/image/2/context.json",
                    "@id": "https://cdm16022.contentdm.oclc.org/iiif/2/p16022coll349:13302",
                    "width": 3396,
                    "height": 4117,
                    "tiles": [
                      {
                        "width": 3396,
                        "scaleFactors": [1, 2, 4, 8, 16]
                      }
                    ],
                    "profile": "http://iiif.io/api/image/2/level1.json",
                    "protocol": "http://iiif.io/api/image"
                  },
                  "format": "image/jpeg",
                  "width": 3396,
                  "height": 4117
                },
                "on": "https://cdm16022.contentdm.oclc.org/iiif/p16022coll349:13302/canvas/c1"
              }
            ],
            "width": 3396,
            "height": 4117
          }
        ]
      }
    ]
  }
]

// src="/test.html" for local
// src="/mac_ciao/test.html" for deploy

// update div w/ button click
function myfunction(e) { 
	e.preventDefault();
	var myText =  "you clicked the button and the viewer has been replaced with this text";
	var ass = `<iframe
		src="/test.html"
		name="targetframe"
		allowTransparency="true"
		scrolling="yes"
		frameborder="0"
		style="height: 100%; width: 100%"
	>
	</iframe>`

	document.getElementById('uv').innerHTML = ass;
} 
