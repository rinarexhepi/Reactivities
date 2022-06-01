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

insert into Tekste VALUES (9789951817110, 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')
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


insert into Libri VALUES (9789928063298, 'Sekreti i Parisit', 'Natasha Lester', '"Sekreti i Parisit” nga Natasha Lester është një histori zemërthyese, e shkruar bukur, e treguar në periudha të ndryshme kohore që të çojnë në Paris, në Angli dhe në Australi.', 'OMBRA GVG',2020, 'Novelë','sfsf')
insert into Libri VALUES (9789928048110, 'Rruga jone, rruga e suksesit ne biznes', 'Vasil Naçi', 'Presidenti i Agna Group, trajnuesi dhe filantropi Vasil Naçi dhe Dr. Alma Bici sjellin për lexuesit librin e ri “Rruga jonë, rruga e suksesit në biznes”, - i cili në vetvete përmbledh një përvojë të gjatë në zhvillimin e kompanisë Agna Group dhe që ofrohet si model edhe për sipërmarrësit shqiptarë. Libri është një variant i përpunuar i botimit të mëparshëm “Është rruga jonë”, i parë me imtësi në kontekstin e zhvillimeve të reja në biznes', 'Agna Leadership Academy', 2019,'Motivim dhe Zhvillim','sfsf')
insert into Libri VALUES (9789928085085, 'Artistja e kenase', 'Alka Joshi', 'Plot jetë dhe tërheqës, në portretizimin e betejës së një gruaje për vetëpërmbushje, në një shoqëri që lëkundet mes tradicionales dhe modernes, libri “Artistja e kënasë” hap një derë drejt një bote sa të harlisur e magjepsëse, aq edhe të zymtë e mizore.', 'MediaPrint', 2021,'Romancë','sfsf')
insert into Libri VALUES (9789928338242, 'E pazbutura', 'Glennon Doyle', 'Sa i fortë, aq edhe i brishtë, libri “E pazbutura” është njëherazi një memoar intim dhe një thirrje guximshkundëse dhe zgjuese për të treguar se çfarë mund të ndodhë, kur dalim nga kafazet tona dhe themi: kjo jam unë!', 'Living', 2019,'Biografi','sfsf')
insert into Libri VALUES (9789951817110, 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')

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

insert into Revista VALUES (9789951817110, 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')

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

insert into Per_Femije VALUES (9789951817110, 'Vete-besimi', 'Charles Pepin', 'Vetëbesimi është një çështje aq qendrore në ekzistencat tona, sa s’mund të jetë objekt i vetëm një disipline. Për t’ia kuptuar zemrekët, s’duhet të kërkojmë ta studiojmë në një laborator, por ta vëzhgojmë në jetën e vërtetë, ta shohim duke u lindur dhe rritur, t’ia përqafojmë ritmin dhe t’ia ndjekim lëvizjet, ngurrimet dhe rrëmbimet, t’i vrapojmë përbri siç ndjekim një fëmijë që desh rrëzohet, e pastaj e gjen ekuilibrin dhe hidhet përpara.', 'PEMA', 2021,'Psikologji','sfsf')

