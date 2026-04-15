primeiro_valor = input('Digite um valor: ')
segundo_valor = input('Digite outro valor: ')

#minha resolução do exercicio (sim resolvi sozinha)
#if primeiro_valor > segundo_valor:
#    print('O primeiro valor é maior que o segundo valor')
#else:
#    print('O segundo valor é maior que o primeiro valor')


#resolução do professor(com f string(esqueci disso rs))
if primeiro_valor >= segundo_valor:
    print(f'{primeiro_valor = } é maior ou igual do que {segundo_valor = }')
else:
    print(f'{segundo_valor = } é maior do que {primeiro_valor = }')