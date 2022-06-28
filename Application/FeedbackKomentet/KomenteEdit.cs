using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.FeedbackKomentet
{
    public class KomenteEdit
    {
        public class Command : IRequest
        {
            public Komente Komente { get; set; }
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
                var komenti = await _context.Komente.FindAsync(request.Komente.ID);

                _mapper.Map(request.Komente, komenti);

                await _context.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}