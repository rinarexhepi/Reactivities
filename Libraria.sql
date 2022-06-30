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

insert into Libri VALUES ('768478343298', 'Sekreti i Parisit', 'Natasha Lester', '"Sekreti i Parisit” nga Natasha Lester është një histori zemërthyese, e shkruar bukur, e treguar në periudha të ndryshme kohore që të çojnë në Paris, në Angli dhe në Australi.', 'OMBRA GVG',2020, 'Novelë','sfsf')
insert into Libri VALUES ('978967583783', 'Rruga jone, rruga e suksesit ne biznes', 'Vasil Naçi', 'Presidenti i Agna Group, trajnuesi dhe filantropi Vasil Naçi dhe Dr. Alma Bici sjellin për lexuesit librin e ri “Rruga jonë, rruga e suksesit në biznes”, - i cili në vetvete përmbledh një përvojë të gjatë në zhvillimin e kompanisë Agna Group dhe që ofrohet si model edhe për sipërmarrësit shqiptarë. Libri është një variant i përpunuar i botimit të mëparshëm “Është rruga jonë”, i parë me imtësi në kontekstin e zhvillimeve të reja në biznes', 'Agna Leadership Academy', 2019,'Motivim dhe Zhvillim','sfsf')
insert into Libri VALUES ('508575398932', 'Artistja e kenase', 'Alka Joshi', 'Plot jetë dhe tërheqës, në portretizimin e betejës së një gruaje për vetëpërmbushje, në një shoqëri që lëkundet mes tradicionales dhe modernes, libri “Artistja e kënasë” hap një derë drejt një bote sa të harlisur e magjepsëse, aq edhe të zymtë e mizore.', 'MediaPrint', 2021,'Romancë','sfsf')
insert into Libri VALUES ('826363335642', 'E pazbutura', 'Glennon Doyle', 'Sa i fortë, aq edhe i brishtë, libri “E pazbutura” është njëherazi një memoar intim dhe një thirrje guximshkundëse dhe zgjuese për të treguar se çfarë mund të ndodhë, kur dalim nga kafazet tona dhe themi: kjo jam unë!', 'Living', 2019,'Biografi','sfsf')
insert into Libri VALUES ('711245667340', 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')


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

insert into Tekste VALUES ('9789951817110', 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Tekste VALUES ('9824787617423', 'Vetebesimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Tekste VALUES ('9789528574282', 'Vetbhsbhdk', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Tekste VALUES ('9789257872487', 'Vetfdbdfddb', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Tekste VALUES ('9789257872477', 'fatlindiii', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')

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

insert into Revista VALUES ('9789951817110', 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Revista VALUES ('9789658247569', 'Vetebesimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Revista VALUES ('9789963533554', 'Vetebesimii', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Revista VALUES ('9789243164336', 'Vete-besimiii', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into Revista VALUES ('9789235464343', 'Vete-besimighdt', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')


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

insert into LibraPerFemije VALUES ('9789951817110', 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into LibraPerFemije VALUES ('9789965435436', 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into LibraPerFemije VALUES ('9789364374575', 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')
insert into LibraPerFemije VALUES ('9789463254252', 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')

create table Publikime(
ID int IDENTITY (400,1)primary key,
Emri varchar (50),
Autori varchar(20),
Pershkrimi varchar(500),
Lloji varchar(30),
Viti_Publikimit int,
Foto varchar(255)
)
insert into Publikime VALUES ( 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'sfsf')
insert into Publikime VALUES ( 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'sfsf')
insert into Publikime VALUES ( 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'sfsf')
insert into Publikime VALUES ( 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'sfsf')

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