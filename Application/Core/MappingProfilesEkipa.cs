
using AutoMapper;
using Domain;

namespace Application.Core
{
    public class MappingProfilesEkipa
    {
        public class MappingProfiles : Profile
        {
            public MappingProfiles()
            {
                CreateMap<Ekipa, Ekipa>();
            }
        }

    }
}