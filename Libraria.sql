Create database Libraria

use Libraria

--------------------------LIBRI---------------
--drop table Libri
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

insert into Libri VALUES ('768478343298', 'Sekreti i Parisit', 'Natasha Lester', '"Sekreti i Parisit� nga Natasha Lester �sht� nj� histori zem�rthyese, e shkruar bukur, e treguar n� periudha t� ndryshme kohore q� t� �ojn� n� Paris, n� Angli dhe n� Australi.', 'OMBRA GVG',2020, 'Novel�','sfsf')
insert into Libri VALUES ('978967583783', 'Rruga jone, rruga e suksesit ne biznes', 'Vasil Na�i', 'Presidenti i Agna Group, trajnuesi dhe filantropi Vasil Na�i dhe Dr. Alma Bici sjellin p�r lexuesit librin e ri �Rruga jon�, rruga e suksesit n� biznes�, - i cili n� vetvete p�rmbledh nj� p�rvoj� t� gjat� n� zhvillimin e kompanis� Agna Group dhe q� ofrohet si model edhe p�r sip�rmarr�sit shqiptar�. Libri �sht� nj� variant i p�rpunuar i botimit t� m�parsh�m ��sht� rruga jon�, i par� me imt�si n� kontekstin e zhvillimeve t� reja n� biznes', 'Agna Leadership Academy', 2019,'Motivim dhe Zhvillim','sfsf')
insert into Libri VALUES ('508575398932', 'Artistja e kenase', 'Alka Joshi', 'Plot jet� dhe t�rheq�s, n� portretizimin e betej�s s� nj� gruaje p�r vet�p�rmbushje, n� nj� shoq�ri q� l�kundet mes tradicionales dhe modernes, libri �Artistja e k�nas� hap nj� der� drejt nj� bote sa t� harlisur e magjeps�se, aq edhe t� zymt� e mizore.', 'MediaPrint', 2021,'Romanc�','sfsf')
insert into Libri VALUES ('826363335642', 'E pazbutura', 'Glennon Doyle', 'Sa i fort�, aq edhe i brisht�, libri �E pazbutura� �sht� nj�herazi nj� memoar intim dhe nj� thirrje guximshkund�se dhe zgjuese p�r t� treguar se �far� mund t� ndodh�, kur dalim nga kafazet tona dhe themi: kjo jam un�!', 'Living', 2019,'Biografi','sfsf')
insert into Libri VALUES ('711245667340', 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')


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
select * from Tekste

insert into Tekste VALUES ('9789951817110', 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Tekste VALUES ('9824787617423', 'Vetebesimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Tekste VALUES ('9789528574282', 'Vetbhsbhdk', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Tekste VALUES ('9789257872487', 'Vetfdbdfddb', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Tekste VALUES ('9789257872477', 'fatlindiii', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')

select * from tekste

drop table Revista
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

insert into Revista VALUES ('9789951817110', 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Revista VALUES ('9789658247569', 'Vetebesimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Revista VALUES ('9789963533554', 'Vetebesimii', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Revista VALUES ('9789243164336', 'Vete-besimiii', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Revista VALUES ('9789235464343', 'Vete-besimighdt', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')


create table LibraPerFemije(
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

insert into LibraPerFemije VALUES ('9789951817110', 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into LibraPerFemije VALUES ('9789965435436', 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into LibraPerFemije VALUES ('9789364374575', 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into LibraPerFemije VALUES ('9789463254252', 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'Psikologji','sfsf')

create table Publikime(
ID int IDENTITY (400,1)primary key,
Emri varchar (50),
Autori varchar(20),
Pershkrimi varchar(500),
Lloji varchar(30),
Viti_Publikimit int,
Foto varchar(255)
)
insert into Publikime VALUES ( 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'sfsf')
insert into Publikime VALUES ( 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'sfsf')
insert into Publikime VALUES ( 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'sfsf')
insert into Publikime VALUES ( 'Vete-besimi', 'Charles Pepin', 'Vet�besimi �sht� nj� ��shtje aq qendrore n� ekzistencat tona, sa s�mund t� jet� objekt i vet�m nj� disipline. P�r t�ia kuptuar zemrek�t, s�duhet t� k�rkojm� ta studiojm� n� nj� laborator, por ta v�zhgojm� n� jet�n e v�rtet�, ta shohim duke u lindur dhe rritur, t�ia p�rqafojm� ritmin dhe t�ia ndjekim l�vizjet, ngurrimet dhe rr�mbimet, t�i vrapojm� p�rbri si� ndjekim nj� f�mij� q� desh rr�zohet, e pastaj e gjen ekuilibrin dhe hidhet p�rpara.', 'PEMA', 2021,'sfsf')

select * from Publikime


create table Users(
ID int IDENTITY (10000,1)primary key,
Emri varchar (50),
Mbiemri varchar (50),
Username varchar (50),
Email varchar (50),
)


insert into Users VALUES('Rina','Rexhepi','rinarexhepi','rinarexhepi@gmail.com');
insert into Users VALUES('Fatlind','Bytyqi','fatlindbytyqi','fatlindbytyqi@gmail.com');
insert into Users VALUES('Drin','Cerkini','drincerkini','drincerkini@gmail.com');



--create table Blog(
--ID int IDENTITY (2000,1)primary key,
--Titulli varchar (50),
--Komenti varchar(255),
--)

--drop table Blog

create table Komente(
ID int IDENTITY (1000,1)primary key,
Username varchar (50),
Komenti varchar(255),
)

insert into Komente VALUES('fatlindbytyqi', 'hnjsknhkfka');
insert into Komente VALUES('drincerkini', 'hnjsknhkfka');
insert into Komente VALUES('rinarexhepi', 'hnjsknhkfka');

select * from Komente

create table Autori(
ID int IDENTITY (20000,1)primary key,
Emri varchar (50),
Mbiemri varchar (50),
VitiLindjes int,
Biografia varchar (50),
Foto varchar (255),
)

insert into Autori VALUES('Rexhep', 'Hoxha', 1949, 'frsgrfsgsgs', 'hfsjhgsu');
insert into Autori VALUES('Rexhep', 'Hoxha', 1949, 'frsgrfsgsgs', 'hfsjhgsu');
insert into Autori VALUES('Rexhep', 'Hoxha', 1949, 'frsgrfsgsgs', 'hfsjhgsu');


select * from Autori

create table LibraTeRinj(
ID int IDENTITY (700,1)primary key,
ISBN varchar(255),
Titulli varchar (50),
Autori varchar(20),
Zhanri varchar(30),
Foto varchar(255)
)

insert into LibraTeRinj VALUES ('9789587469845', 'Vete-besimi', 'Charles Pepin', 'PEMA','sfsf')
insert into LibraTeRinj VALUES ('9789587467845', 'Vete-besimi', 'Charles Pepin', 'PEMA','sfsf')
insert into LibraTeRinj VALUES ('9789587468845', 'Vete-besimi', 'Charles Pepin', 'PEMA','sfsf')
insert into LibraTeRinj VALUES ('9789587462845', 'Vete-besimi', 'Charles Pepin', 'PEMA','sfsf')

drop table LibraTeRinj


create table LibraBoteror(
    Id int identity(600, 1),
    Isbn varchar(50),
    Titulli varchar(50),
    Autori varchar (100),
    Zhanri varchar(100),
    Gjuha varchar(100),
    Foto varchar(255)
)

insert into LibraBoteror VALUES(8976665443,'jsruhngihsn','bfrbs','fshfs','fsgsbd','fsgdsrrr')


create table Kontakti(
    ID int IDENTITY (5000,1)primary key,
    Emri varchar(50),
    Mbiemri varchar(50),
    Email varchar(50),
    Mesazhi varchar(255),
)

insert into Kontakti(Emri, Mbiemri, Email, Mesazhi) values('drin', 'cerkini', 'drin@gmail.com', 'hello from ubt')
insert into Kontakti(Emri, Mbiemri, Email, Mesazhi) values('faltind', 'bytyqi', 'fatlind@gmail.com', 'hello from ubt prishtine')
insert into Kontakti(Emri, Mbiemri, Email, Mesazhi) values('rina', 'rexhepi', 'rina@gmail.com', 'hello from kosovo')
insert into Kontakti(Emri, Mbiemri, Email, Mesazhi) values('filan', 'fisteku', 'filan@gmail.com', 'not hello from ubt')

select * from Kontakti

drop table Kontakti