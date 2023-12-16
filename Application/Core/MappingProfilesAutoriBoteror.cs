
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfileAutoriBoteror
    {
        public class MappingProfiles : Profile
        {
            public MappingProfiles()
            {
                CreateMap<AutoriBoteror, AutoriBoteror>();
            }
        }

    }
}