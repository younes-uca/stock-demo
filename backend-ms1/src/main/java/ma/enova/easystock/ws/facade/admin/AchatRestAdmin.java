package  ma.enova.easystock.ws.facade.admin;


import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import ma.enova.easystock.bean.core.Achat;
import ma.enova.easystock.bean.history.AchatHistory;
import ma.enova.easystock.dao.criteria.core.AchatCriteria;
import ma.enova.easystock.dao.criteria.history.AchatHistoryCriteria;
import ma.enova.easystock.service.facade.admin.AchatAdminService;
import ma.enova.easystock.ws.converter.AchatConverter;
import ma.enova.easystock.ws.dto.AchatDto;
import ma.enova.easystock.zynerator.controller.AbstractController;
import ma.enova.easystock.zynerator.dto.AuditEntityDto;
import ma.enova.easystock.zynerator.util.PaginatedList;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import ma.enova.easystock.zynerator.process.Result;

@Api("Manages achat services")
@RestController
@RequestMapping("/api/admin/achat/")
public class AchatRestAdmin  extends AbstractController<Achat, AchatDto, AchatHistory, AchatCriteria, AchatHistoryCriteria, AchatAdminService, AchatConverter> {

    @ApiOperation("Finds a list of all achats")
    @GetMapping("")
    public ResponseEntity<List<AchatDto>> findAll() throws Exception {
        return super.findAll();
    }
    @ApiOperation("Updates the specified  achat")
    @PutMapping("")
    public ResponseEntity<AchatDto> update(@RequestBody AchatDto dto) throws Exception {
        return super.update(dto);
    }
    @ApiOperation("Finds a achat by id")
    @GetMapping("id/{id}")
    public ResponseEntity<AchatDto> findById(@PathVariable Long id, String[] includes, String[] excludes) throws Exception {
        return super.findById(id, includes, excludes);
    }
    @ApiOperation("Saves the specified  achat")
    @PostMapping("")
    public ResponseEntity<AchatDto> save(@RequestBody AchatDto dto) throws Exception {
        return super.save(dto);
    }
    @ApiOperation("Delete list of achat")
    @PostMapping("multiple")
    public ResponseEntity<List<AchatDto>> delete(@RequestBody List<AchatDto> listToDelete) throws Exception {
        return super.delete(listToDelete);
    }
    @ApiOperation("Delete the specified achat")
    @DeleteMapping("")
    public ResponseEntity<AchatDto> delete(@RequestBody AchatDto dto) throws Exception {
            return super.delete(dto);
    }

    @ApiOperation("Delete the specified achat")
    @DeleteMapping("id/{id}")
    public ResponseEntity<Long> deleteById(@PathVariable Long id) throws Exception {
        return super.deleteById(id);
    }
    @ApiOperation("Delete multiple achats by ids")
    @DeleteMapping("multiple/id")
    public ResponseEntity<List<Long>> deleteByIdIn(@RequestBody List<Long> ids) throws Exception {
            return super.deleteByIdIn(ids);
     }
    @ApiOperation("find by client id")
    @GetMapping("client/id/{id}")
    public List<Achat> findByClientId(@PathVariable Long id){
        return service.findByClientId(id);
    }
    @ApiOperation("delete by client id")
    @DeleteMapping("client/id/{id}")
    public int deleteByClientId(@PathVariable Long id){
        return service.deleteByClientId(id);
    }
    @ApiOperation("Finds a achat and associated list by id")
    @GetMapping("detail/id/{id}")
    public ResponseEntity<AchatDto> findWithAssociatedLists(@PathVariable Long id) {
        return super.findWithAssociatedLists(id);
    }

    @ApiOperation("Finds achats by criteria")
    @PostMapping("find-by-criteria")
    public ResponseEntity<List<AchatDto>> findByCriteria(@RequestBody AchatCriteria criteria) throws Exception {
        return super.findByCriteria(criteria);
    }

    @ApiOperation("Finds paginated achats by criteria")
    @PostMapping("find-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findPaginatedByCriteria(@RequestBody AchatCriteria criteria) throws Exception {
        return super.findPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports achats by criteria")
    @PostMapping("export")
    public ResponseEntity<InputStreamResource> export(@RequestBody AchatCriteria criteria) throws Exception {
        return super.export(criteria);
    }

    @ApiOperation("Gets achat data size by criteria")
    @PostMapping("data-size-by-criteria")
    public ResponseEntity<Integer> getDataSize(@RequestBody AchatCriteria criteria) throws Exception {
        return super.getDataSize(criteria);
    }

    @ApiOperation("Gets achat history by id")
    @GetMapping("history/id/{id}")
    public ResponseEntity<AuditEntityDto> findHistoryById(@PathVariable("id") Long id) throws Exception {
        return super.findHistoryById(id);
    }

    @ApiOperation("Gets achat paginated history by criteria")
    @PostMapping("history-paginated-by-criteria")
    public ResponseEntity<PaginatedList> findHistoryPaginatedByCriteria(@RequestBody AchatHistoryCriteria criteria) throws Exception {
        return super.findHistoryPaginatedByCriteria(criteria);
    }

    @ApiOperation("Exports achat history by criteria")
    @PostMapping("export-history")
    public ResponseEntity<InputStreamResource> exportHistory(@RequestBody AchatHistoryCriteria criteria) throws Exception {
        return super.exportHistory(criteria);
    }

    @ApiOperation("Gets achat history data size by criteria")
    @PostMapping("history-data-size")
    public ResponseEntity<Integer> getHistoryDataSize(@RequestBody AchatHistoryCriteria criteria) throws Exception {
        return super.getHistoryDataSize(criteria);
    }
    public AchatRestAdmin (AchatAdminService service, AchatConverter converter) {
        super(service, converter);
    }


}