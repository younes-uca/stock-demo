package ma.enova.easystock.dao.facade.history;

import ma.enova.easystock.zynerator.repository.AbstractHistoryRepository;
import ma.enova.easystock.bean.history.ClientHistory;
import org.springframework.stereotype.Repository;

@Repository
public interface ClientHistoryDao extends AbstractHistoryRepository<ClientHistory,Long> {

}
