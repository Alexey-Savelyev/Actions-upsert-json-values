const core = require("@actions/core");
const fs = require("fs");

const writer = require("./json-writer");

async function main()
{
    try
    {
        let file = core.getInput('file', {required: true});

        let fields = core.getInput('fields', {required: true}).split("|");
        let values = core.getInput('values', {required: true}).split("|");

        console.log(`fields: ${fields}`);
        console.log(`values: ${values}`);

        if(fields.length !== values.length)
        {
            core.setFailed('Fields and values lengths do not match');
        }

        let data = fs.readFileSync(file, 'utf8');

        let obj = JSON.parse(data);
        
        fields.forEach((field, index) =>
        {
            console.log(`field: ${field}`);
            console.log(`index: ${index}`);
            console.log(`values[index]: ${values[index]}`);

            obj = writer.write(obj, field, values[index]);
        });
        
        data = JSON.stringify(obj, null, 2);

        fs.writeFileSync(file, data, 'utf8');
    }
    catch (error)
    {
        core.setFailed(error.message);
    }
}

main()
    .then(() => process.exit(0))
    .catch(e =>
    {
        console.error(e);
        process.exit(1);
    });