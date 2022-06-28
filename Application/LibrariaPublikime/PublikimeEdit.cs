

using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.LibrariaPublikime
{
    public class PublikimeEdit
    {
        public class Command : IRequest
        {
            public Publikime Publikime { get; set; }
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
                var publikime = await _context.Publikime.FindAsync(request.Publikime.ID);

                _mapper.Map(request.Publikime, publikime);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}