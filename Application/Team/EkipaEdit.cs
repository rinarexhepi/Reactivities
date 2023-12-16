
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Team

{
    public class EkipaEdit
    {
        public class Command : IRequest
        {
            public Ekipa Ekipa { get; set; }
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
                var ekipa = await _context.Ekipa.FindAsync(request.Ekipa.ID);

                _mapper.Map(request.Ekipa, ekipa);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}