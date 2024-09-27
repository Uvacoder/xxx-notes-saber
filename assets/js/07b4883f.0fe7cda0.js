"use strict";(self.webpackChunkawesome_notes=self.webpackChunkawesome_notes||[]).push([[1865],{5404:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=t(6070),l=t(4837);const a={author:"Sabertazimi",authorTitle:"Web Developer",authorURL:"https://github.com/sabertazimi",authorImageURL:"https://github.com/sabertazimi.png",tags:["Language","Python"]},s="Python Basic Notes",o={id:"Language/Python/PythonBasicNotes",title:"Python Basic Notes",description:"Basic Types",source:"@site/notes/Language/Python/PythonBasicNotes.md",sourceDirName:"Language/Python",slug:"/Language/Python/PythonBasicNotes",permalink:"/awesome-notes/Language/Python/PythonBasicNotes",draft:!1,unlisted:!1,editUrl:"https://github.com/sabertazimi/awesome-notes/edit/main/notes/Language/Python/PythonBasicNotes.md",tags:[{inline:!0,label:"Language",permalink:"/awesome-notes/tags/language"},{inline:!0,label:"Python",permalink:"/awesome-notes/tags/python"}],version:"current",lastUpdatedBy:"sabertazimi",lastUpdatedAt:1712724461e3,frontMatter:{author:"Sabertazimi",authorTitle:"Web Developer",authorURL:"https://github.com/sabertazimi",authorImageURL:"https://github.com/sabertazimi.png",tags:["Language","Python"]},sidebar:"tutorialSidebar",previous:{title:"Java Basic Notes",permalink:"/awesome-notes/Language/Java/JavaBasicNotes"},next:{title:"Rust Basic Notes",permalink:"/awesome-notes/Language/Rust/RustBasicNotes"}},r={},d=[{value:"Basic Types",id:"basic-types",level:2},{value:"Tuples",id:"tuples",level:3},{value:"Control Statement",id:"control-statement",level:2},{value:"For Loop",id:"for-loop",level:3},{value:"While Loop",id:"while-loop",level:3},{value:"Functions",id:"functions",level:2},{value:"Classes",id:"classes",level:2},{value:"CLI Application",id:"cli-application",level:2},{value:"Basic CLI",id:"basic-cli",level:3},{value:"Progress Bar",id:"progress-bar",level:3},{value:"Data Files",id:"data-files",level:2},{value:"CSV File",id:"csv-file",level:3},{value:"JSON File",id:"json-file",level:3},{value:"XML File",id:"xml-file",level:3},{value:"Plain Text File",id:"plain-text-file",level:3},{value:"Converter",id:"converter",level:3},{value:"NumPy",id:"numpy",level:2},{value:"NumPy Array Creation",id:"numpy-array-creation",level:3},{value:"NumPy Indexing",id:"numpy-indexing",level:3},{value:"NumPy Matrix Operations",id:"numpy-matrix-operations",level:3},{value:"Matplotlib",id:"matplotlib",level:2},{value:"Plot Type",id:"plot-type",level:3},{value:"Plot Style",id:"plot-style",level:3},{value:"Plot Axis Tick",id:"plot-axis-tick",level:3},{value:"Plot Legend",id:"plot-legend",level:3},{value:"Subplot",id:"subplot",level:3},{value:"3D Plot",id:"3d-plot",level:3},{value:"Paper Figures Plot",id:"paper-figures-plot",level:3},{value:"Awesome Library",id:"awesome-library",level:2},{value:"Debugging and Testing",id:"debugging-and-testing",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"python-basic-notes",children:"Python Basic Notes"})}),"\n",(0,i.jsx)(n.h2,{id:"basic-types",children:"Basic Types"}),"\n",(0,i.jsx)(n.h3,{id:"tuples",children:"Tuples"}),"\n",(0,i.jsx)(n.p,{children:"tuples in python are immutable"}),"\n",(0,i.jsx)(n.h2,{id:"control-statement",children:"Control Statement"}),"\n",(0,i.jsx)(n.h3,{id:"for-loop",children:"For Loop"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"for i in range(3): # goes from i = 0 to i = 2\n  x += 1\n\nfor i in [0, 1, 2]:\n  x += 1\n"})}),"\n",(0,i.jsx)(n.h3,{id:"while-loop",children:"While Loop"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"while x > 0:\n  x -= 1\n"})}),"\n",(0,i.jsx)(n.h2,{id:"functions",children:"Functions"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'def join_name(first_name, last_name):\n  joined_name = first_name + " " + last_name\n  return joined_name\n'})}),"\n",(0,i.jsx)(n.h2,{id:"classes",children:"Classes"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'class Pet(object):\n  def __init__(self, species, color, name):\n    self.species = species\n    self.color = color\n    self.name = name\n\n  def __str__(self):\n    return "{0} {1} named {2}.".format(self.color, self.species, self.name)\n\n  def change_name(self, new_name):\n    self.name = new_name\n\nmy_dog = Pet(species="dog", color="orange", name="Guises")\nprint(my_dog)\nprint(my_dog.name)\n# => output:\n# orange dog named Guises.\n# Guises\n'})}),"\n",(0,i.jsx)(n.h2,{id:"cli-application",children:"CLI Application"}),"\n",(0,i.jsx)(n.h3,{id:"basic-cli",children:"Basic CLI"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import click\n\nfrom caesar_encryption import encrypt\n\n@click.command()\n@click.option(\n    '--input_file',\n    type=click.File('r'),\n    help='File in which there is the text you want to encrypt/decrypt.'\n         'If not provided, a prompt will allow you to type the input text.',\n)\n@click.option(\n    '--output_file',\n    type=click.File('w'),\n    help='File in which the encrypted / decrypted text will be written.'\n         'If not provided, the output text will just be printed.',\n)\n@click.option(\n    '--decrypt/--encrypt',\n    '-d/-e',\n    help='Whether you want to encrypt the input text or decrypt it.'\n)\n@click.option(\n    '--key',\n    '-k',\n    default=1,\n    help='The numeric key to use for the caesar encryption / decryption.'\n)\ndef caesar(input_file, output_file, decrypt, key):\n    if input_file:\n        text = input_file.read()\n    else:\n        text = click.prompt('Enter a text', hide_input=not decrypt)\n    if decrypt:\n        key = -key\n    cypherText = encrypt(text, key)\n    if output_file:\n        output_file.write(cypherText)\n    else:\n        click.echo(cypherText)\n\nif __name__ == '__main__':\n    caesar()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"progress-bar",children:"Progress Bar"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import click\nimport enchant\n\nfrom tqdm import tqdm\n\nfrom caesar_encryption import encrypt\n\n@click.command()\n@click.option(\n    '--input_file',\n    type=click.File('r'),\n    required=True,\n)\n@click.option(\n    '--output_file',\n    type=click.File('w'),\n    required=True,\n)\ndef caesar_breaker(input_file, output_file):\n    cypherText = input_file.read()\n    english_dictionary = enchant.Dict(\"en_US\")\n    best_number_of_english_words = 0\n    for key in tqdm(range(26)):\n        plaintext = encrypt(cypherText, -key)\n        number_of_english_words = 0\n        for word in plaintext.split(' '):\n            if word and english_dictionary.check(word):\n                number_of_english_words += 1\n        if number_of_english_words > best_number_of_english_words:\n            best_number_of_english_words = number_of_english_words\n            best_plaintext = plaintext\n            best_key = key\n    click.echo(f'The most likely encryption key is {best_key}. It gives the\n    following plaintext:\\n\\n{best_plaintext[:1000]}...')\n    output_file.write(best_plaintext)\n\nif __name__ == '__main__':\n    caesar_breaker()\n"})}),"\n",(0,i.jsx)(n.h2,{id:"data-files",children:"Data Files"}),"\n",(0,i.jsx)(n.h3,{id:"csv-file",children:"CSV File"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import csv\n\nfilename = \"my_data.csv\"\n\nfields = []\nrows = []\n\n# Reading csv file\nwith open(filename, 'r') as csvFile:\n    # Creating a csv reader object\n    csvReader = csv.reader(csvFile)\n\n    # Extracting field names in the first row\n    fields = csvReader.next()\n\n    # Extracting each data row one by one\n    for row in csvReader:\n        rows.append(row)\n\n# Printing out the first 5 rows\nfor row in rows[:5]:\n    print(row)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import csv\n\n# Field names\nfields = ['Name', 'Goals', 'Assists', 'Shots']\n\n# Rows of data in the csv file\nrows = [ ['Emily', '12', '18', '112'],\n         ['Katie', '8', '24', '96'],\n         ['John', '16', '9', '101'],\n         ['Mike', '3', '14', '82']]\n\nfilename = \"soccer.csv\"\n\n# Writing to csv file\nwith open(filename, 'w+') as csvFile:\n    # Creating a csv writer object\n    csvWriter = csv.writer(csvFile)\n\n    # Writing the fields\n    csvWriter.writerow(fields)\n\n    # Writing the data rows\n    csvWriter.writerows(rows)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'import pandas as pd\n\nfilename = "my_data.csv"\n\n# Read in the data\ndata = pd.read_csv(filename)\n\n# Print the first 5 rows\nprint(data.head(5))\n\n# Write the data to file\ndata.to_csv("new_data.csv", sep=",", index=False)\n'})}),"\n",(0,i.jsx)(n.h3,{id:"json-file",children:"JSON File"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import json\nimport pandas as pd\n\n# Read the data from file\n# We now have a Python dictionary\nwith open('data.json') as f:\n    data_listOfDict = json.load(f)\n\n# We can do the same thing with pandas\ndata_df = pd.read_json('data.json', orient='records')\n\n# We can write a dictionary to JSON like so\n# Use 'indent' and 'sort_keys' to make the JSON\n# file look nice\nwith open('new_data.json', 'w+') as json_file:\n    json.dump(data_listOfDict, json_file, indent=4, sort_keys=True)\n\n# And again the same thing with pandas\nexport = data_df.to_json('new_data.json', orient='records')\n"})}),"\n",(0,i.jsx)(n.h3,{id:"xml-file",children:"XML File"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import xml.etree.ElementTree as ET\nimport xmltodict\nimport json\n\ntree = ET.parse('output.xml')\nxml_data = tree.getroot()\n\nxmlStr = ET.tostring(xml_data, encoding='utf8', method='xml')\n\ndata_dict = dict(xmltodict.parse(xmlStr))\n\nprint(data_dict)\n\nwith open('new_data_2.json', 'w+') as json_file:\n    json.dump(data_dict, json_file, indent=4, sort_keys=True)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"plain-text-file",children:"Plain Text File"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import numpy as np\nx, y = np.loadtxt('input.dat', delimiter=',', unpack=True)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"converter",children:"Converter"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import pandas as pd\nfrom dicttoxml import dicttoxml\nimport json\n\n# Building our dataframe\ndata = {'Name': ['Emily', 'Katie', 'John', 'Mike'],\n        'Goals': [12, 8, 16, 3],\n        'Assists': [18, 24, 9, 14],\n        'Shots': [112, 96, 101, 82]\n        }\n\ndf = pd.DataFrame(data, columns=data.keys())\n\n# Converting the dataframe to a dictionary\n# Then save it to file\ndata_dict = df.to_dict(orient=\"records\")\nwith open('output.json', \"w+\") as f:\n    json.dump(data_dict, f, indent=4)\n\n# Converting the dataframe to XML\n# Then save it to file\nxml_data = dicttoxml(data_dict).decode()\nwith open(\"output.xml\", \"w+\") as f:\n    f.write(xml_data)\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import json\nimport pandas as pd\nimport csv\n\n# Read the data from file\n# We now have a Python dictionary\nwith open('data.json') as f:\n    data_listOfDict = json.load(f)\n\n# Writing a list of dicts to CSV\nkeys = data_listOfDict[0].keys()\nwith open('saved_data.csv', 'wb') as output_file:\n    dict_writer = csv.DictWriter(output_file, keys)\n    dict_writer.writeheader()\n    dict_writer.writerows(data_listOfDict)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"numpy",children:"NumPy"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import numpy as np\n\nnp.random.seed(seed=1234)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"numpy-array-creation",children:"NumPy Array Creation"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"x = np.array(6)\nx.ndim\nx.shape\nx.size\nx.dtype\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"np.zeros((2, 2))\nnp.ones((2, 2))\nnp.eye((2))\nnp.random.random.((2, 2))\n"})}),"\n",(0,i.jsx)(n.h3,{id:"numpy-indexing",children:"NumPy Indexing"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"x = np.array([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]])\nx[:, 1]    # [2, 6, 10]\nx[0, :]    # [1, 2, 3, 4]\nx[:3, 1:3] # [[2, 3], [6, 7], [10, 11]]\nx[[0, 1, 2], [0, 2, 1]] # [1, 7, 10]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'# Boolean array indexing\nx = np.array([[1,2], [3, 4], [5, 6]])\nprint ("x:\\n", x)\nprint ("x > 2:\\n", x > 2)\nprint ("x[x > 2]:\\n", x[x > 2])\n# x:\n#  [[1 2]\n#  [3 4]\n#  [5 6]]\n# x > 2:\n#  [[False False]\n#  [ True  True]\n#  [ True  True]]\n# x[x > 2]:\n#  [3 4 5 6]\n'})}),"\n",(0,i.jsx)(n.h3,{id:"numpy-matrix-operations",children:"NumPy Matrix Operations"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["math: ",(0,i.jsx)(n.code,{children:"x+y"}),"/",(0,i.jsx)(n.code,{children:"x-y"}),"/",(0,i.jsx)(n.code,{children:"x*y"})," ",(0,i.jsx)(n.code,{children:"np.add/subtract/multiply"})]}),"\n",(0,i.jsxs)(n.li,{children:["dot product: ",(0,i.jsx)(n.code,{children:"a.dot(b)"})]}),"\n",(0,i.jsxs)(n.li,{children:["sum: ",(0,i.jsx)(n.code,{children:"np.sum(x)"})]}),"\n",(0,i.jsxs)(n.li,{children:["column sum: ",(0,i.jsx)(n.code,{children:"np.sum(x, axis=0)"})]}),"\n",(0,i.jsxs)(n.li,{children:["row sum: ",(0,i.jsx)(n.code,{children:"np.sum(x, axis=1)"})]}),"\n",(0,i.jsxs)(n.li,{children:["transposing: ",(0,i.jsx)(n.code,{children:"x.T"})]}),"\n",(0,i.jsxs)(n.li,{children:["reshape: ",(0,i.jsx)(n.code,{children:"np.reshape(x, (2, 3))"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"matplotlib",children:"Matplotlib"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"pip3 install matplotlib\npip3 install ggplot\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import matplotlib.pyplot as plt\n\nfig = plt.figure()\nax = plt.subplot2grid((1, 1), (0, 0))\n\nax.fill_between(x, y, y[0],where=(y > y[0]), facecolor='g', alpha=0.5)\n\nax.grid(True)\nax.xaxis.label.set_color('c') ax.yaxis.label.set_color('r') ax.set_yticks([0,25,50,75])\nax.xaxis.get_ticklabels()\n\nax.spines['left'].set_color('c') ax.spines['right'].set_visible(False)\nax.spines['top'].set_visible(False) ax.spines['left'].set_linewidth(5)\nax.tick_params(axis='x', colors='#f06215')\nax.axhline(20, color='k', linewidth=5)\n\nax.text(x, y, 'text')\nax.annotate(\n  'Bad News!',\n  xytext=(0.8, 0.9),\n  textcoords='axes fraction',\n  arrowprops = dict(facecolor='grey', color='grey')\n)\n\nplt.plot(x, y, label='label', color='red', linewidth=5)\nplt.bar(x, y, label='label', color='#111')\nplt.scatter(x, y, label='label', marker='*', size=100)\nplt.stackplot(x, y1, y2, ..., yn, colors=[])\nplt.pie(slices, labels=[], colors=[], startangle=90, explode=(), autopct='%1.1f%%')\nplt.hist(data, bins=10, histtype='bar', rwidth=0.8)\n\nplt.xlabel('xlabel')\nplt.ylabel('ylabel')\nplt.title('title')\nplt.legend()\nplt.subplots_adjust()\nplt.show()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"plot-type",children:"Plot Type"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"bar"})," plot."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"line"})," plot."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"scatter"})," plot."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"pie"})," plot."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"stack"})," plot."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"histogram"})," plot."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"interval"})," plot."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"box"})," plot."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"KDE"})," plot."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"candlestick_ohlc"})," plot."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"plot-style",children:"Plot Style"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from matplotlib import style\nprint(plt.style.available)\nprint(plt.__file__)\nstyle.use('ggplot')\nstyle.use('fivethirtyeight')\nplt.style.use('mystylesheet.mplrc')\n"})}),"\n",(0,i.jsx)(n.h3,{id:"plot-axis-tick",children:"Plot Axis Tick"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"ax3.xaxis.set_major_formatter(mDates.DateFormatter('%Y-%m-%d'))\nax3.xaxis.set_major_locator(mTicker.MaxNLocator(10))\nax1.yaxis.set_major_locator(mTicker.MaxNLocator(nbins=5, prune='lower'))\n\nfor label in ax3.xaxis.get_ticklabels():\n    label.set_rotation(45)\n\nplt.setp(ax1.get_xticklabels(), visible=False)\nplt.setp(ax2.get_xticklabels(), visible=False)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"plot-legend",children:"Plot Legend"}),"\n",(0,i.jsx)(n.p,{children:"Up middle legend:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"ax.legend()\nleg = ax.legend(loc=9, ncol=2,prop={'size':11})\nleg.get_frame().set_alpha(0.4)\n"})}),"\n",(0,i.jsx)(n.h3,{id:"subplot",children:"Subplot"}),"\n",(0,i.jsx)(n.p,{children:"Tall and width for grid template:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"fig = plt.figure()\nax1 = fig.add_subplot(221)\nax2 = fig.add_subplot(222)\nax3 = fig.add_subplot(212)\n\nax1 = plt.subplot2grid((6,1), (0,0), rowspan=1, colspan=1)\nax2 = plt.subplot2grid((6,1), (1,0), rowspan=4, colspan=1)\nax3 = plt.subplot2grid((6,1), (5,0), rowspan=1, colspan=1)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Double y-axis:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"ax2v = ax2.twinx()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"3d-plot",children:"3D Plot"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from mpl_toolkits.mplot3d import axes3d\nimport matplotlib.pyplot as plt\nfrom matplotlib import style\n\nstyle.use('ggplot')\n\nfig = plt.figure()\nax1 = fig.add_subplot(111, projection='3d')\n\nx = [1,2,3,4,5,6,7,8,9,10]\ny = [5,6,7,8,2,5,6,3,7,2]\nz = [1,2,6,3,2,7,3,3,7,2]\n\nx2 = [-1,-2,-3,-4,-5,-6,-7,-8,-9,-10]\ny2 = [-5,-6,-7,-8,-2,-5,-6,-3,-7,-2]\nz2 = [1,2,6,3,2,7,3,3,7,2]\n\nax1.scatter(x, y, z, c='g', marker='o')\nax1.scatter(x2, y2, z2, c ='r', marker='o')\n\nax1.set_xlabel('x axis')\nax1.set_ylabel('y axis')\nax1.set_zlabel('z axis')\n\nplt.show()\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"from mpl_toolkits.mplot3d import axes3d\nimport matplotlib.pyplot as plt\nimport numpy as np\nfrom matplotlib import style\nstyle.use('ggplot')\n\nfig = plt.figure()\nax1 = fig.add_subplot(111, projection='3d')\n\nx3 = [1,2,3,4,5,6,7,8,9,10]\ny3 = [5,6,7,8,2,5,6,3,7,2]\nz3 = np.zeros(10)\n\ndx = np.ones(10)\ndy = np.ones(10)\ndz = [1,2,3,4,5,6,7,8,9,10]\n\nax1.bar3d(x3, y3, z3, dx, dy, dz)\n\nax1.set_xlabel('x axis')\nax1.set_ylabel('y axis')\nax1.set_zlabel('z axis')\n\nplt.show()\n"})}),"\n",(0,i.jsx)(n.h3,{id:"paper-figures-plot",children:"Paper Figures Plot"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/jbmouret/matplotlib_for_papers",children:"Matplotlib for Papers"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import matplotlib.pyplot as plt\nimport matplotlib\n\ndef latexify(fig_width=None, fig_height=None, columns=1):\n    '''Set up matplotlib RC params for LaTeX plotting.\n    Call this before plotting a figure.\n\n    Parameters\n    ----------\n    fig_width : float, optional, inches\n    fig_height : float,  optional, inches\n    columns : {1, 2}\n    '''\n\n    # code adapted from http://www.scipy.org/Cookbook/Matplotlib/LaTeX_Examples\n\n    # Width and max height in inches for IEEE journals taken from\n    # computer.org/cms/Computer.org/Journal%20templates/transactions_art_guide.pdf\n\n    assert(columns in [1,2])\n\n    if fig_width is None:\n        fig_width = 3.39 if columns==1 else 6.9 # width in inches\n\n    if fig_height is None:\n        golden_mean = (sqrt(5)-1.0)/2.0    # Aesthetic ratio\n        fig_height = fig_width*golden_mean # height in inches\n\n    MAX_HEIGHT_INCHES = 8.0\n    if fig_height > MAX_HEIGHT_INCHES:\n        print(\"WARNING: fig_height too large:\" + fig_height +\n              \"so will reduce to\" + MAX_HEIGHT_INCHES + \"inches.\")\n        fig_height = MAX_HEIGHT_INCHES\n\n    params = {'backend': 'ps',\n              'text.latex.preamble': ['\\usepackage{gensymb}'],\n              'axes.labelsize': 8, # fontsize for x and y labels (was 10)\n              'axes.titlesize': 8,\n              'text.fontsize': 8, # was 10\n              'legend.fontsize': 8, # was 10\n              'xtick.labelsize': 8,\n              'ytick.labelsize': 8,\n              'text.usetex': True,\n              'figure.figsize': [fig_width,fig_height],\n              'font.family': 'serif'\n    }\n\n    matplotlib.rcParams.update(params)\n\ndef format_axes(ax):\n\n    for spine in ['top', 'right']:\n        ax.spines[spine].set_visible(False)\n\n    for spine in ['left', 'bottom']:\n        ax.spines[spine].set_color(SPINE_COLOR)\n        ax.spines[spine].set_linewidth(0.5)\n\n    ax.xaxis.set_ticks_position('bottom')\n    ax.yaxis.set_ticks_position('left')\n\n    for axis in [ax.xaxis, ax.yaxis]:\n        axis.set_tick_params(direction='out', color=SPINE_COLOR)\n\n    return ax\n\nlatexify()\nax.set_xlabel(\"X label\")\nax.set_ylabel(\"Y label\")\nax.set_title(\"Title\")\nplt.tight_layout()\nformat_axes(ax)\nplt.savefig(\"figure.pdf\")\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:"import numpy as np\nimport matplotlib as mpl\nmpl.use('pdf')\nimport matplotlib.pyplot as plt\n\nplt.rc('font', family='serif', serif='Times')\nplt.rc('text', usetex=True)\nplt.rc('xtick', labelsize=8)\nplt.rc('ytick', labelsize=8)\nplt.rc('axes', labelsize=8)\n\n# width as measured in ink scape\nwidth = 3.487\nheight = width / 1.618\n\nfig, ax = plt.subplots()\nfig.subplots_adjust(left=.15, bottom=.16, right=.99, top=.97)\n\nx = np.arange(0.0, 3*np.pi , 0.1)\nplt.plot(x, np.sin(x))\n\nax.set_ylabel('Some Metric (in unit)')\nax.set_xlabel('Something (in unit)')\nax.set_xlim(0, 3*np.pi)\n\nfig.set_size_inches(width, height)\nfig.savefig('plot.pdf')\n"})}),"\n",(0,i.jsx)(n.h2,{id:"awesome-library",children:"Awesome Library"}),"\n",(0,i.jsx)(n.h3,{id:"debugging-and-testing",children:"Debugging and Testing"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cool-RR/PySnooper",children:"PySnooper"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4837:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(758);const l={},a=i.createContext(l);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);