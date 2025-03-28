const fs = require('fs');
const path = require('path');

function exists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (err) {
    console.error(`Erro ao verificar existência de ${filePath}:`, err);
    return false;
  }
}

function findConsoleLogs(dir) {
  let filesWithLogs = [];

  try {
    const files = fs.readdirSync(dir);

    for (const file of files) {
      const fullPath = path.join(dir, file);

      if (fullPath.includes('node_modules')) {
        continue;
      }

      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        filesWithLogs = filesWithLogs.concat(findConsoleLogs(fullPath));
      } else if (stat.isFile() && (file.endsWith('.js') || file.endsWith('.ts'))) {
        const content = fs.readFileSync(fullPath, 'utf-8');
        if (content.includes('console.log')) {
          filesWithLogs.push(fullPath);
        }
      }
    }
  } catch (err) {
    console.error(`Erro ao ler o diretório ${dir}:`, err);
  }

  return filesWithLogs;
}

const projectDir = process.argv[2] ? path.resolve(process.argv[2]) : path.resolve(process.cwd());

if (exists(projectDir)) {
  console.log(`Verificando por console.log em: ${projectDir}`);
  const files = findConsoleLogs(projectDir);

  if (files.length > 0) {
    console.log('Foram encontrados console.log nos seguintes arquivos:');
    files.forEach(file => console.log(`- ${file}`));
  } else {
    console.log('Nenhum console.log encontrado no projeto.');
  }
} else {
  console.error('Diretório do projeto não encontrado!');
}