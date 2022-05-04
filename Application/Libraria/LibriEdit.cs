
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Libraria
{
    public class LibriEdit
    {
        public class Command : IRequest
        {
            public Libri Libri { get; set; }
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
                var libri = await _context.Libri.FindAsync(request.Libri.ID);

                _mapper.Map(request.Libri, libri);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}
