# Orientações do projeto gestao-financeira

Orientações adicionais para executar aplicativo no emulador Android localmente.

## Instalação de dependências

**[Gifted Charts](https://github.com/Abhinandan-Kushwaha/react-native-gifted-charts)** *(biblioteca de gráficos)*:

- website: [gifted-charts.web.app](https://gifted-charts.web.app/)
- comandos de instalação:
  - `npm install react-native-gifted-charts react-native-linear-gradient react-native-svg`
  - ou `npx expo install react-native-gifted-charts expo-linear-gradient react-native-svg`

## Configuração para execução do aplicativo

**Liberar porta 5555 para executar o comando `npm run prisma:studio`**:

- No Windows 11:
  - verificar se está a porta 5555 está ocupada e o que está ocupando ela: `netstat -ano | findstr :5555`
  - no PowerShell, executar o seguinte comando para liberar a porta 5555: `Stop-Process -Id (Get-NetTCPConnection -LocalPort 5555).OwningProcess -Force`

**Resetar porta do Prisma para 5555 ou 5556** *(caso o comando `npm run prisma:studio` não funcione)*: `npx prisma studio --port 5556`
