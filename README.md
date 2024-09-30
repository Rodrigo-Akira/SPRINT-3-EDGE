SPRINT 3 de EDGE COMPUTING
Rodrigo Akira Hirota Mori RM:555384
Gabriel Barros Mazzariol RM:555410 

LINK DO VIDEO DE EXPLICAÇÃO E DO WOKWI :
https://youtu.be/6mWxHtFGOmE?si=mam2Y-c2BX2K_4JB
https://wokwi.com/projects/410407177076888577

EXPLICAÇÃO DO CODIGO:
O código diz quais pinos do ESP32 serão usados: um para um LED, um para um botão e um para um potenciômetro que controla a velocidade, quando o código começa, ele tenta conectar ao Wi-Fi, se conseguir, ele fica pronto para trabalhar, o código fica em um loop, verificando se o botão está pressionado, se você apertar o botão, ele lê a velocidade do potenciômetro e gera valores aleatórios para o desgaste dos pneus e o tempo de pit stop. Depois que os dados são lidos, o ESP32 os envia para o servidor, ele também verifica se a mensagem foi enviada corretamente e mostra a resposta no console, resumindo, o código faz o ESP32 pegar informações sobre um carro e enviar para um servidor na internet.


