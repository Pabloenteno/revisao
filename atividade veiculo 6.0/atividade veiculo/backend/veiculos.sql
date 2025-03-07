create database veiculo;
use veiculo;

create table veiculos(
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(10) UNIQUE NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    cor VARCHAR(20) NOT NULL,
    dono VARCHAR(100) NOT NULL
);

select * from veiculos;

insert into veiculos (placa,modelo,cor,dono)values(
'bvc3b333','civic','preto','pablo'
);