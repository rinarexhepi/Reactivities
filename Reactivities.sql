use Reactivities

create table Tekste(
ID int IDENTITY (100,1)primary key,
ISBN varchar(255) not null unique,
Emri varchar (50),
Autori varchar(20),
Pershkrimi varchar(500),
Shtepia_Botuese varchar(50),
Viti_Publikimit int,
Zhanri varchar(30),
Foto varchar(255)
)
drop table Tekste

insert into Tekste VALUES (9789951817110, 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')
select * from tekste

delete from tekste where id=107


create table Libri(
ID int IDENTITY (1,1)primary key,
ISBN varchar(255) not null unique,
Emri varchar (50),
Autori varchar(20),
Pershkrimi varchar(500),
Shtepia_Botuese varchar(50),
Viti_Publikimit int,
Zhanri varchar(30),
Foto varchar(255)
)


insert into Libri VALUES (9789928063298, 'Sekreti i Parisit', 'Natasha Lester', '"Sekreti i Parisit� nga Natasha Lester �sht� nj� histori zem�rthyese, e shkruar bukur, e treguar n� periudha t� ndryshme kohore q� t� �ojn� n� Paris, n� Angli dhe n� Australi.', 'OMBRA GVG',2020, 'Novel�','sfsf')
insert into Libri VALUES (9789928048110, 'Rruga jone, rruga e suksesit ne biznes', 'Vasil Na�i', 'Presidenti i Agna Group, trajnuesi dhe filantropi Vasil Na�i dhe Dr. Alma Bici sjellin p�r lexuesit librin e ri �Rruga jon�, rruga e suksesit n� biznes�, - i cili n� vetvete p�rmbledh nj� p�rvoj� t� gjat� n� zhvillimin e kompanis� Agna Group dhe q� ofrohet si model edhe p�r sip�rmarr�sit shqiptar�. Libri �sht� nj� variant i p�rpunuar i botimit t� m�parsh�m ��sht� rruga jon�, i par� me imt�si n� kontekstin e zhvillimeve t� reja n� biznes', 'Agna Leadership Academy', 2019,'Motivim dhe Zhvillim','sfsf')
insert into Libri VALUES (9789928085085, 'Artistja e kenase', 'Alka Joshi', 'Plot jet� dhe t�rheq�s, n� portretizimin e betej�s s� nj� gruaje p�r vet�p�rmbushje, n� nj� shoq�ri q� l�kundet mes tradicionales dhe modernes, libri �Artistja e k�nas� hap nj� der� drejt nj� bote sa t� harlisur e magjeps�se, aq edhe t� zymt� e mizore.', 'MediaPrint', 2021,'Romanc�','sfsf')
insert into Libri VALUES (9789928338242, 'E pazbutura', 'Glennon Doyle', 'Sa i fort�, aq edhe i brisht�, libri �E pazbutura� �sht� nj�herazi nj� memoar intim dhe nj� thirrje guximshkund�se dhe zgjuese p�r t� treguar se �far� mund t� ndodh�, kur dalim nga kafazet tona dhe themi: kjo jam un�!', 'Living', 2019,'Biografi','sfsf')
insert into Libri VALUES (9789951817110, 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')

create table Revista(
ID int IDENTITY (200,1)primary key,
ISBN varchar(255) not null unique,
Emri varchar (50),
Autori varchar(20),
Pershkrimi varchar(500),
Shtepia_Botuese varchar(50),
Viti_Publikimit int,
Zhanri varchar(30),
Foto varchar(255)
)

insert into Revista VALUES (9789951817110, 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')

create table Per_Femije(
ID int IDENTITY (300,1)primary key,
ISBN varchar(255) not null unique,
Emri varchar (50),
Autori varchar(20),
Pershkrimi varchar(500),
Shtepia_Botuese varchar(50),
Viti_Publikimit int,
Zhanri varchar(30),
Foto varchar(255)
)

insert into Per_Femije VALUES (9789951817110, 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')

