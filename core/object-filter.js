let data = {
	"user": "sathish",
	"siteData": {
		"pages": [{
			"id": "beb31550-23cf-11e8-9747-3778ea7277eb",
			"text": "Home",
			"href": "index.html",
			"children": []
		}],
		"pagesMap": {
			"beb31550-23cf-11e8-9747-3778ea7277eb": {
				"blockIds": ["c1f0b420-23cf-11e8-9747-3778ea7277eb"],
				"blocksMap": {
					"c1f0b420-23cf-11e8-9747-3778ea7277eb": {
						"id": "c1f0b420-23cf-11e8-9747-3778ea7277eb",
						"type": "BLANK",
						"style": {
							"height": 555
						},
						"properties": {
							"backgroundColor": {
								"r": 107,
								"g": 47,
								"b": 47,
								"a": 18
							}
						},
						"cmpsMap": {
							"ece0ad70-23cf-11e8-9747-3778ea7277eb": {
								"type": "IMAGE",
								"style": {
									"width": 241,
									"height": 160,
									"left": 404.5,
									"top": 59,
									"zIndex": 102
								},
								"properties": {
									"mode": "FIT",
									"image": {
										"name": "1.jpg",
										"width": 2000,
										"height": 1328,
										"size": "429kb"
									}
								},
								"id": "ece0ad70-23cf-11e8-9747-3778ea7277eb",
								"orderIndex": 102
							}
						}
					}
				}
			}
		},
		"styles": {
			"fixedTopBlock": false,
			"fonts": {
				"beb31550-23cf-11e8-9747-3778ea7277eb": []
			}
		}
	},
	"mobileData": {},
	"template": {
		"width": 1170,
		"left": 55
	},
	"cmpOrderIndex": 102,
	"selectedPageId": "beb31550-23cf-11e8-9747-3778ea7277eb"
}

function updateResult(o, userData, filter) {
	Object.keys(filter).forEach((key) => {
		if (typeof filter[key] === 'boolean') {
			o[key] = userData[key];
		} else if (typeof filter[key] === 'object') {
			updateResult(o, (userData[key])?userData[key]: userData, filter[key]);
		}

	});
	return o;
}

function filterResult(userData, filterObject) {
    if (!filterObject) {
        return userData;
	}
	let result = {};
	updateResult(result, userData, filterObject)
	console.log('\nResult: ', result);
}

filterResult(data, {
	'pages': {
		'siteData': {
			'pages': true
		}
	},
	'styles': {
		'siteData': {
			'styles': true
		}
	},
	'template': true,
	'blocksMap': true
});

filterResult(data, {
	'pageData': {
		'siteData': {
			'pagesMap': {
				"beb31550-23cf-11e8-9747-3778ea7277eb": true
			}
		}
	}
});