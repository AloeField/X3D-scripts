function estado(val) {
    if(val == true)
    {
        if(flag == false)
        {
            matiz = new SFColor (1.0, 0.0, 0.0);    //de detectar el cilindro originalmente en blanco, pulsándolo se tornarojo
            flag = true;
        } else
        {
            matiz = new SFColor (0.0, 0.0, 1.0);    //ahora pasa a ser azul
            flag = false;
            
        }
    }
}