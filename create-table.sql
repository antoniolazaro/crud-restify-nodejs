--mysql
create table categories (id int(11) unsigned not null auto_increment,name varchar(255), primary key (id));

--postgres
create table categories (id serial primary key,name varchar(255));
insert into category(name) values('Teste');
insert into category(name) values('Teste 1');
insert into category(name) values('Teste 2');
