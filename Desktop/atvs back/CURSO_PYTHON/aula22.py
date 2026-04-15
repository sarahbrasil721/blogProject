# or - Qualquer condição verdadeira avalia toda a expressão como verdadeira.
# Se qualquer valor for considerado verdadeiro, a expressão inteira será avaliada naquele valor.

#print(True or False or 0 or 'abc' or True)

senha = input('Senha: ') or 'Sem senha'
print(senha)