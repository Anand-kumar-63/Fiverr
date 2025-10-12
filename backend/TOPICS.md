# what is ipv4 and ipv6 address 
- IP stands for Internet Protocol.
- It’s a set of rules for addressing and routing data so it can travel across networks and reach the right destination (like   postal addresses for the internet).
- Every device on a network (computer, phone, server, IoT device) gets an IP address.

## IPv4 (Internet Protocol version 4)
- The 4th version of IP, introduced in 1983;
- Uses a 32-bit address system → about 4.3 billion unique addresses.
- Written in decimal format with 4 groups separated by dots:

192.168.1.1
8.8.8.8 (Google DNS)

## IPv6 (Internet Protocol version 6)
- The successor to IPv4, introduced in 1999.
- Uses a 128-bit address system → about 340 undecillion addresses (massive, practically infinite).
- Written in hexadecimal format with 8 groups separated by colons:

2001:0db8:85a3:0000:0000:8a2e:0370:7334

# what is need of parser 
A parser is a component in software that takes raw input, such as code, queries, or configuration text, and breaks it down into a structured form that a computer can understand and work with. It acts like a translator between human-readable instructions and machine-readable structures, ensuring that the input follows the correct rules (syntax) and converting it into a usable representation, often a tree-like structure. Parsers are essential because computers cannot directly understand plain text; they rely on parsers to interpret meaning, validate correctness, and translate the input into instructions or data structures. For example, browsers use parsers to turn HTML into a webpage, databases use parsers to interpret SQL queries, and programming languages use parsers to process code. Without parsers, humans could not communicate effectively with machines using high-level languages or structured formats.

# To access the env files
- you have to install the dotenv package in your project then at you index.js or server.js file import the package and then use the config() function to access the env variables.
```js
import dotenv from "dotenv";
dotenv.config();
// Load variables from .env into process.env
```

# Mongodb queries methods
***.Select***
- .select() controls which fields are included/excluded in query results.
- You can mix-and-match inclusion, exclusion, and schema defaults.
- Later .select() calls override earlier ones.

```javascript
import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, select: false }, // hidden by default
  age: Number,
  city: String
});
const User = mongoose.model("User", userSchema);


// Only get name and city
const users = await User.find().select("name city");
console.log(users);
// Result docs will only have: { _id, name, city }

// Get all fields except age and city
const users = await User.find().select("-age -city");
console.log(users);
// Result docs will have everything except age & city

// Normally 'email' is hidden. This will include it
const users = await User.find().select("+email");
console.log(users);
// Result docs will include email along with other fields
    
// First: include name and age
// Then: exclude age (overrides the first select)
const users = await User.find()
  .select({ name: 1, age: 1 })
  .select({ age: 0 });

console.log(users);
// Final result docs only have { _id, name }

```
## mongodb query prototype 
=> Read More - https://mongoosejs.com/docs/api/query.html#Query.prototype.geometry()


# Local storage 
Addding data in localstorage 
localstorage.setitem(key:String , value:String) // json.stringify(value)
.getitem(key)
.clearitem 
