# Console Log Finder

This script scans a given directory (and its subdirectories) for JavaScript (`.js`) and TypeScript (`.ts`) files that contain `console.log` statements. It helps developers identify and remove unnecessary `console.log` calls from their codebase.

## Features

- Recursively searches through directories.
- Ignores the `node_modules` folder.
- Detects `console.log` statements in `.js` and `.ts` files.
- Outputs a list of files containing `console.log`.

## Requirements

- Node.js installed on your system.

## Usage

1. Clone or download this repository.
2. Open a terminal and navigate to the directory containing the `index.js` file.
3. Run the script using the following command:
```bash
   node index.js [directory]
```
4. Replace [directory] with the path to the directory you want to scan.
5. If no directory is provided, the script will scan the current working directory.

## Example
To scan the current directory:

```bash
node index.js
```

To scan a specific directory:

```bash
node index.js /path/to/your/project
```

## Notes
The script skips the node_modules folder to avoid unnecessary processing.
It only scans files with .js and .ts extensions.

## License

This project is licensed under the MIT License.
