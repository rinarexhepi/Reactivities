
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.ContactUs

{
    public class KontaktiEdit
    {
        public class Command : IRequest
        {
            public Kontakti Kontakti { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IMapper _mapper;

            public Handler(DataContext context, IMapper mapper)
            {
                _context = context;
                _mapper = mapper;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var kontakt = await _context.Kontakti.FindAsync(request.Kontakti.ID);

                _mapper.Map(request.Kontakti, kontakt);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}