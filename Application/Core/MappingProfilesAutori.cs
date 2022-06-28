
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfileAutor
    {
        public class MappingProfiles : Profile
        {
            public MappingProfiles()
            {
                CreateMap<Autori, Autori>();
            }
        }

    }
}