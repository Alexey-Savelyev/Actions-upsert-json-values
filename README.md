# GitHub Action - Fill Json

This GitHub Action helps edit a JSON file


## Usage

Add this step in your workflow file
```yaml
- name: 
    uses: Alexey-Savelyev/Actions-fill-json@v1.0.0
    with:
        file: settings.json
        fields: "'field1'|'some.path.field2'|'field3'"
        values: "'val1'|3|'val2'"
```

### Input Variables

- `file`: File name to edit (e.g. 'settings.json', 'path/settings.json')
- `field`: Array of fields to edit (e.g. 'field1'|'some.path.field2'|'field3')
- `value`: Array of values to set (e.g. 'val1'|'val2'|3)


## Credits

This repo was forked and modified. original - https://github.com/jossef/action-set-json-field