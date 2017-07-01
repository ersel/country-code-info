# :globe_with_meridians: Country Code Info :globe_with_meridians:
A JavaScript module to get country information in various standards.

# Data Fields Available
```
Country name: -
A-2: Alpha-2 codes from ISO 3166-1
A-3: Alpha-3 codes from ISO 3166-1 (synonymous with World Bank Codes)
Num: Numeric codes from ISO 3166-1
ITU: Codes assigned by the International Telecommunications Union
GEC: Codes from the U.S. standard GEC
IOC: Codes assigned by the International Olympics Committee . These codes identify the nationality of athletes and teams during Olympic events.
FIFA: Codes assigned by the Fédération Internationale de Football Association 
DS: Distinguishing signs of vehicles in international traffic (oval bumper sticker codes)
WMO: Country abbreviations used in weather reports from the World Meteorological Organization
GAUL: Global Administrative Unit Layers from the Food and Agriculture Organization
MARC: MAchine-Readable Cataloging codes from the Library of Congress
Dial: Country code from ITU-T recommendation E.164 (international dialing code), sometimes followed by area code
Independent: Country status, based on the CIA World Factbook. This column is just a superficial note, provided for convenience. I don't care to
argue about it. For full details, please consult your favorite official source.
```
Data was gathered from [http://www.statoids.com/wab.html](http://www.statoids.com/wab.html)

# Installation
`npm install country-codes --save`

# Usage
```
const CountryCodes = require('country-code-info');

// you can search countries by any data field
// by passing in a key value pair
// key: data field
// value: value to search for

let uk = CountryCodes.findCountry({'name': 'United Kingdom'});
/* returns:
{
	'name': 'United Kingdom',
	'a2': 'GB',
	'a3': 'GBR',
	'num': '826',
	'itu': 'G',
	'gec': 'UK',
	'ioc': 'GBR',
	'fifa': 'ENG, NIR, SCO, WAL',
	'ds': 'GB',
	'wmo': 'UK',
	'gaul': '256',
	'marc': 'xxk',
	'dial': '44',
	'independent': 'Yes'
}
*/

// examples showing searching by various data fields
let uk = CountryCodes.findCountry({'fifa': 'eng'});
let uk = CountryCodes.findCountry({'dial': '44'});
```

# Notes 

If a country is not found, a `null` object is returned.

Key and Value pairs are not case-sensitive so `{'name':'united kingdom'}` and `{'NAME': 'united kingdom'}` are treated in the same way.

If an invalid data field key is used or a search object is not provided, errors are thrown.

# Contribution
If you spot any problems, feel free to raise an issue or submit a PR.
